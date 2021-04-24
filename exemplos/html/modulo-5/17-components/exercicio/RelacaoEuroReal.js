export default {
  name: "RelacaoEuroReal",
  data() {
    return {
      retorno: 0
    }
  },
  methods: {
    obterRetorno() {
      fetch("https://api.exchangeratesapi.io/latest?base=EUR")
        .then(r => r.json())
        .then(r => this.retorno = r.rates.BRL);
    }
  },
  created() {
    this.obterRetorno();
  },
  template: `
    <pre> 1 euro = {{retorno}} reais</pre>
  `,
}