//Component Object
const computedBehavior = require("miniprogram-computed");

Component({
  properties: {
    innerText: {
      type: String,
      value: "default value"
    }
    // myProperty: {
    //     type: String,
    //     value: '',
    //     observer: function () { }
    // },
  },
  behaviors: [computedBehavior],
  data: {
    someData: {},
    a: 0
  },
  computed: {
    b() {
      return this.data.a + 100;
    }
  },
  methods: {
    customMethod() {},
    onclick() {
      console.log("click");
      this.triggerEvent("click", { name: "zhong" });
    },
    onTap() {
      this.setData({ a: ++this.data.a });
    }
  },
  created: function() {},
  attached: function() {},
  ready: function() {},
  moved: function() {},
  detached: function() {}
});
