<template>
  <div id="app">

    <TopBar></TopBar>
        <Home></Home>
    <Glide></Glide>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from '@/components/Home'
import TopBar from '@/components/TopBar.vue'
import Glide from './components/Glide.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Home,
    TopBar,
    Glide,
    Footer
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
