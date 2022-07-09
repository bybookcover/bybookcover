<template>
  <div id="app">

    <TopBar></TopBar>
    <Glide></Glide>
    <Detail></Detail>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Glide from './components/Glide.vue'
import Footer from './components/Footer.vue'
import Detail from './components/Detail.vue'
export default {
  name: 'App',
  components: {
    TopBar,
    Glide,
    Footer,
    Detail
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
