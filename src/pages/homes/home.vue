<template>
  <div id="app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
    <br>
    <a href="/index.html">点我</a>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    data (){
      return{
        counter:'1'
      }
    },
    watch:{
      counter:function (nval,oval) {
        console.log('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
      }
    }
  }

</script>

<style>
</style>
