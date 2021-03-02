<template>
  <div id="app">
    <div class="content pb-5">
      <Header :locale="this.locale"/>
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
    data: function(){
      return{
        locale: "EN",
      }
    },
    created(){
      
    },
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

#app{
  min-height: 100%;
  position: relative;
}
</style>
