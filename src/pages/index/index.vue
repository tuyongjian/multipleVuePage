<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
   <span>index</span>
    <br>
    <a window.location.href ="/home.html">点我</a>

    <br>
    <button v-on:click="ajaxTest">ajaxTest</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    methods: {
      ajaxTest: function () {
        this.$http.post('/ssm/user/query', {"age": 10, "userName": "javen"}, response => {
            console.log(11111);
        });
      }
    }
  }

</script>

<style>
  .active {
    width: 100px;
    height: 100px;
    background: green;
  }
</style>
