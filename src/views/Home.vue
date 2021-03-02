<template>
  <div class="home">
    <!-- C'est ici qu'on doit s'assurrer que le bon composant s'affiche en conséquence de de la varialbe loggedIn -->
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
    // Si l'utilisateur est connecté, on doit retourner le bon composant
    if(!this.loggedIn){
      this.component = "HomeNotLogged"
    }else{
      this.component = "HomeLoggedIn"
    }
  }
}
</script>
