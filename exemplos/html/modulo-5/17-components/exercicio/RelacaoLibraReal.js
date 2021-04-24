import RelacaoEuroReal from "./RelacaoEuroReal.js";

export default {
  name: "RelacaoLibraReal",
  data() {
    return {
      retorno: 0
    }
  },
  methods: {
    obterRetorno() {
      fetch("https://api.exchangeratesapi.io/latest?base=GBP")
        .then(r => r.json())
        .then(r => this.retorno = r.rates.BRL);
    }
  },
  created() {
    this.obterRetorno();
  },
  components: {
    RelacaoEuroReal
  },
  template: `
    <div>
      <relacao-euro-real></relacao-euro-real>
      <pre> 1 libra = {{retorno}} reais</pre>
    </div>
  `,
}