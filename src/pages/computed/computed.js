const computedBehavior = require("miniprogram-computed");

Component({
  behaviors: [computedBehavior],
  data: {
    a: 0
  },
  computed: {
    b() {
      // 计算属性同样挂在 data 上，每当进行 setData 的时候会重新计算
      // 比如此字段可以通过 this.data.b 获取到
      return this.data.a + 100;
    }
  },
  methods: {
    onTap() {
      this.setData({
        a: ++this.data.a
      });
    }
  }
});
