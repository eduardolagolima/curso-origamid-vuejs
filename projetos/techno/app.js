const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: {},
    carrinho: [],
    mensagemAlerta: "",
    alertaAtivo: false,
    carrinhoAtivo: false
  },
  filters: {
    formatarPreco(preco) {
      return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
    }
  },
  computed: {
    carrinhoTotal() {
      let carrinhoTotal = 0;

      if (this.carrinho.length === 0)
        return carrinhoTotal;
        
      this.carrinho.forEach(value => carrinhoTotal += value.preco);

      return carrinhoTotal;
    }
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then(r => r.json())
        .then(r => this.produtos = r);
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then(r => r.json())
        .then(r => this.produto = r);
    },
    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget)
        this.produto = {};
    },
    fecharCarrinho({ target, currentTarget }) {
      if (target === currentTarget)
        this.carrinhoAtivo = false;
    },
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({ id, nome, preco });
      this.alerta(`${nome} adicionado ao carrinho`);
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    verificarLocalStorage() {
      if (window.localStorage.carrinho)
        this.carrinho = JSON.parse(window.localStorage.carrinho);
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => this.alertaAtivo = false, 1000);
    },
    compararEstoque() {
      const itens = this.carrinho.filter(({id}) => id === this.produto.id);
      this.produto.estoque -= itens.length;
    },
    router() {
      const hash = document.location.hash;

      if (hash)
        this.fetchProduto(hash.replace("#", ""));
    }
  },
  watch: {
    produto() {
      document.title = this.produto.nome || "Techno";
      const hash = this.produto.id || "";
      history.pushState(null, null, `#${hash}`);
      
      if (Object.keys(this.produto).length > 0)
        this.compararEstoque()
    },
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    }
  },
  created() {
    this.fetchProdutos();
    this.router();
    this.verificarLocalStorage();
  }
});