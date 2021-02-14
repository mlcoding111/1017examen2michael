<template>
  <div
    class="container-fluid contact-wrapper d-flex justify-content-center align-items-center"
  >
    <form>
       <h5>Formulaire de contact</h5>
      <div class="form-row my-5">
        <div class="col">
          <input type="text" class="form-control" placeholder="Nom" v-model="form.nom" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Prénom" v-model="form.prenom"/>
        </div>
      </div>
      <div class="form-row my-5">
        <div class="col">
          <input type="email" class="form-control" placeholder="Courriel" v-model="form.courriel"/>
        </div>
        <div class="col">
          <select id="inputState" value="sea" class="form-control" v-model="selectedOption">
              <option v-for="(option, index) in form.categories" v-bind:key="index">
              {{option}}
              </option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function() {
    return {
      form: {
        nom: "",
        prenom: "",
        courriel: "",
        categories: ["Soutien", "Feedback", "Bug"],
      },
      selectedOption: null,
    };
  },
};
</script>

<style>
.contact-wrapper {
  min-height: 90vh;
  text-align: center;
}
</style>
