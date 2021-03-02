 <!-- Ce composant va s'afficher seulement si l'utlisateur est connecté -->
<template>
  <div class="container content" id="homeContent"> 
    <div class="row">
      <div class="col-12 mb-5 d-flex justify-content-center">
          <img src="../assets/MLWeb.svg" height="125px">  
      </div> 
    </div>
    <!-- First row -->
    <div class="row mt-5">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Michael Lacroix</h5>
              <hr>
            <h6 class="card-subtitle mb-2 text-muted">Développeur front-end</h6>
            <p class="card-text">
              Programmeur junior passioné a la recherche d'un emploi avec le framework ReactJs
            </p>
          </div>
        </div>
      </div>
       <div class="col-6">
        <div class="card dark">
          <div class="card-body">
            <h5 class="card-title text-center">Skills</h5>
                <hr class="bg-white">
            <p class="card-text ml-1">
              <ul>
                  <li>C#</li>
                  <li>Javascript</li>
                  <li>Html/Css</li>              
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Second row -->
    <div class="row my-5">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Education</h5>
              <hr>
            <h6 class="card-subtitle mb-2 text-muted">AEC développement front-end</h6>
            <p class="card-text">
              12 octobre 2018 - 23 juin 2021
            </p>
          </div>
        </div>
      </div>
       <div class="col-6">
        <div class="card dark">
          <div class="card-body">
            <h5 class="card-title text-center">Framework</h5>
              <hr class="bg-white">
            <p class="card-text ml-1">
             <ul>
               <li>VueJs</li>
               <li>Angular</li>
               <li>React</li>
             </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLoggedIn",
};
</script>

<style>
.dark{
  background: #383838;
  color: white;
}
#homeContent{
  margin-top: 5%;
}

.card{
  height: 15rem;
}
</style>
