const watchBehavior = require("miniprogram-computed");

Component({
  behaviors: [watchBehavior],
  properties: {
    propA: {
      type: Number,
      value: 0
    }
  },
  data: {
    a: 0,
    b: {
      c: {
        d: 33
      },
      e: [1, 2, [3, 4]]
    }
  },
  watch: {
    propA(val, oldVal) {
      console.log("propA new: %s, old: %s", val, oldVal);
      this.setData({
        a: oldVal
      });
    },
    a(val, oldVal) {
      console.log("a new: %s, old: %s", val, oldVal);
    },
    "b.c.d": function(val, oldVal) {
      console.log("b.c.d new: %s, old: %s", val, oldVal);
    },
    "b.e[2][0]": function(val, oldVal) {
      console.log("b.e[2][0] new: %s, old: %s", val, oldVal);
    },
    "b.e[3][4]": function(val, oldVal) {
      console.log("b.e[3][4] new: %s, old: %s", val, oldVal);
    }
  },
  methods: {
    onTap() {
      this.setData({
        a: 2,
        "b.c.d": 3,
        "b.e[2][0]": 444,
        c: 123
      });
      this.triggerEvent("update");
    }
  }
});
