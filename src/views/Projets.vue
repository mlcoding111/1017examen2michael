<template>
  <div class="container projects-wrapper p-5 my-5">
    <h1>Liste de projets</h1>
    <div class="row mt-5">
      <div class="col-6 my-3" v-for="project in projects" v-bind:key="project.id">
        <Projet v-bind:project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Projet from "../components/Projet.vue";

export default {
  name: "Projets",
  components: {
    Projet,
  },
  data() {
    return {
      projects: [
        {
          id: 0,
          url: "http://leplana.ca",
          titre: "Plan A",
          imgSrc: "https://i.imgur.com/US6I3hB.jpg",
          description: "Site web d'une compagnie privé qui offre le service de réparation de téléphone mobile"
        },
        {
          id: 1,
          url: "http://ladeko.ca",
          titre: "Ladeko",
          imgSrc: "https://i.imgur.com/ruYWGlZ.jpg",
          description: "Site web d'une nouvelle designer qui offre des produits différents faits a la main"
        },
        {
          id: 2,
          url: "http://mlweb.info/#/",
          titre: "Portfolio React",
          imgSrc: "https://wallpaperaccess.com/full/3949076.jpg",
          description: "Portfolio réalisé avec le framework React"
        },
      ],
    };
  },
};
</script>

<style>
.projects-wrapper {
  text-align: center;
}
</style>
