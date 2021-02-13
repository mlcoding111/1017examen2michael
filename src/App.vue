<template>
  <div id="app">
    <div class="content">
      <Header />
      <router-view/>
    </div>
    <Footer />   
  </div>
  
</template>

<script>

import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
    name: "app",
    components: {
    Header,
    Footer
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body{
  height: 100%;
}
.content{
  min-height: 100%;
  margin-bottom: -50px;
}
</style>
