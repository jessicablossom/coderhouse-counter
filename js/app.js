var app = new Vue({
  el: "#app",
  data: {
    message: "Hola Coder, Hola Mundo!",
    a: 20,
    b: 30,
    textHtml: `<h1>soy un tag de html</h1>`,
    input: "",
    sourceImage: "https://vuejs.org/images/logo.svg",
    link: "https://vuejs.org/",
  },
  methods: {
    funcionAlert() {
      alert("alerta");
    },
  },
  computed: {},
});
