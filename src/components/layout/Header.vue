<template>
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
            <router-link to="/login">Login</router-link>
            </li>
            <li>
            <router-link to="/projets">Projets</router-link>
            </li>
        </div>
        </ul>
  </nav>
</template>

<script>
export default {
    name: "Header"
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