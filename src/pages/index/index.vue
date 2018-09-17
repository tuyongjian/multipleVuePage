<template>
  <div id="app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
    <br>
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">
    <br>
<a href="/home.html">点我</a>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      parent
    },
    data (){
      return{
        counter:'1',
        kilometers:0,
        meters:0
      }
    },
    watch:{
      counter:function (nval,oval) {
        console.log('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
      },
      kilometers:function (val) {
        this.kilometers = val;
        this.meters = val*1000;
      },
      meters:function (val) {
        this.kilometers = val/1000;
        this.meters = val;
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
