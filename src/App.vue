<template>
  <div class="test">张浩
    <div>红色</div>
    <div id="div1">绿色</div>
  </div>
</template>

<script>
import { moment } from "moment";
import { a } from "./components/test.js";
export default {
  name:'App',
  methods: {
    f () {
      console.log('object');
    }
  },
  mounted () {
    // this.f()
    a.f()
  }
}
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
