<template>
  <div class="home">
    <component v-bind:is="component"></component>
  </div>
  
</template>

<script>
import HomeLoggedIn from '../components/HomeLoggedIn'
import HomeNotLogged from '../components/HomeNotLogged'

export default {
  name: 'Home',
  components: {
    HomeLoggedIn,
    HomeNotLogged
  },
  data(){
    return{
        component: 'HomeNotLogged',
        loggedIn: true
    }
  },
  created(){
    if(!this.loggedIn){
      this.component = "HomeNotLogged"
    }else{
      this.component = "HomeLoggedIn"
    }
  }
}
</script>
