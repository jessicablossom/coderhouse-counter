var app = new Vue({
  el: "#app",
  data: {
    message: "Hola Coder, Hola Mundo!",
    a: 20,
    b: true,
  },
  methods: {
    calculoMatematico() {
      return this.a + this.b;
    },
  },
  computed: {
    duplicar() {
      this.imprimirEnConsola();
      return this.a * 2;
    },
  },
});
