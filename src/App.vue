<template>
  <div class="test">张浩
    <div>红色</div>
    <div id="div1">绿色</div>
  </div>
</template>

<script>
import { moment } from "moment";
import { a, b, c, my, default as e } from "./components/test.js";
export default {
  name: "App",
  methods: {
    f(a = 1, b = 2) {
      console.log(`a = ${a}`);
      console.log(`b = ${b}`);
    },

    
  },
  mounted() {
    this.f();

    let r1 = null
    let r2 = null
    let f = function (url) {
      return new Promise((resolve, reject) => {
      console.log(`get data from ${url}`);
      // console.log("s: resolve");
      // console.log("f: reject");
      let msg = "hello,world";
      let code = '0'
      resolve({code, msg});
      // reject(new Error('Failed to fulfill Promise'))
      })
      .then(r => {
        if(!r1) r1 = r
        else r2 = r
      })
      .catch(e => console.log(e));
    }
    let urls = [
      'http://www.baidu.com',
      'http://www.sina.com'
    ]
    let urlPromisses = urls.map(f)
    Promise.all(urlPromisses)
    .then(r => console.log(r1, r2))
    .catch(e => console.log(e))
  }
};
</script>


<style lang="less">
.test div {
  color: #f00;
}
#div1 {
  color: #0f0;
}
div div {
  color: #2c3e50 !important;
}
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
