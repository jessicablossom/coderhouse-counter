var app = new Vue({
  el: "#app",
  data: {
    alumna: "Jessica Francavilla",
    initial: 0,
    total: 0,
  },
  methods: {
    decreaseCounter: function () {
      if (this.initial > 0) {
        this.initial -= 1;
      }
    },
    incrementCounter: function () {
      this.initial += 1;
    },
    incrementTotal: function () {},
  },
  computed: {},
});
