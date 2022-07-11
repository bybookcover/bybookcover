<template>
  <div id="app">

    <TopBar></TopBar>
    <router-view></router-view>
    <MyFooter></MyFooter>

  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MyFooter from '@/components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    TopBar,
    MyFooter
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
