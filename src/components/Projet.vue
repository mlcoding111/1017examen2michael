<template>   
 <!-- On va chercher les éléments venants du props "Project" qui contient le contenu des projets -->
        <div class="card border-black">
          <img
            class="card-img-top"
            :src=project.imgSrc
            alt="Card image cap"
          />
          <div class="card-body">
             <h5 class="card-title">{{project.titre}}</h5>
             <hr>
            <p class="card-text">
              {{project.description}}
            </p>
            <a :href="project.url" target="_blank"><button type="button" class="btn btn-danger">Visiter le site</button></a>
          </div>
        </div>     
</template>

<script>
export default {
  name: "Projet",
  props: ["project"],
};
</script>

<style>

.card{
    height: 100%;
    box-shadow: 0px 0px 15px .5px black;
}
</style>
