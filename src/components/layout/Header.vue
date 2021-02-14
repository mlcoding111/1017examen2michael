<template>
    <!-- 
      Old nav with logo
      <nav>
        <ul id="nav">
        <div>
            <li>
            <router-link to="/">Accueil</router-link>
            </li>
            <li>
            <router-link to="/about">A propos</router-link>
            </li>
        </div>
        <li>
        <img alt="Vue logo" src="../../assets/MLWeb_logo.png" />  
        </li>
        <div>
            <li>
            <router-link to="/contact">Contact</router-link>
            </li>
            <li>
            <router-link to="/projets">Projets</router-link>
            </li>
        </div>
        </ul>
    </nav> -->
    <nav>
        <ul id="nav" class="text-white">
          <li v-for="item in menu" v-bind:key="item.id">            
            <router-link :to="item.route">{{item.titre}}</router-link>      
          </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Header",
    data(){
      return{
        menu: [
          {
            id: 0,
            route: "/",
            titre: "Accueil"
          },
           {
            id: 1,
            route: "/contact",
            titre: "Contact"
          },
          {
            id: 2,
            route: "/projets",
            titre: "Projets"
          },
           {
            id: 3,
            route: "/about",
            titre: "A propos"
          },
          
        ]
      }
    }
}
</script>

<style scoped>
#nav {
  display: flex;
  background: rgb(53, 53, 53);
  height: 100px;
  padding: 0 20rem;
}

#nav div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}

#nav li a {
  display: block;
  margin: 2px 50px;
  color: white !important;
  text-decoration: none;
}

#nav a:hover {
  text-decoration: underline;
}

nav > * {
  flex: 1;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>