export default {
  data() {
    return {
      data: null,
      loading: true
    }
  },
  methods: {
    fetchData(route) {
      this.data = null;
      this.loading = true;

      fetch(`http://0.0.0.0:4000/${this.$route.name}`)
        .then(r => r.json())
        .then(r => {
          setTimeout(() => {
            this.data = r;
            this.loading = false;
          }, 1000);
        });
    }
  },
  created() {
    this.fetchData();
  }
};