export default {
  name: "RelacaoDolarReal",
  data() {
    return {
      retorno: 0
    }
  },
  methods: {
    obterRetorno() {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(r => r.json())
        .then(r => this.retorno = r.rates.BRL);
    }
  },
  created() {
    this.obterRetorno();
  },
  template: `
    <pre> 1 dólar = {{retorno}} reais</pre>
  `,
}