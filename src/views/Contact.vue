<template>
  <div
    class="container-fluid contact-wrapper d-flex justify-content-center align-items-center"
  >
    <!-- Rounded switch -->
    <form class="shadow-lg">
      <h2>{{ 'contactTitle'| translate(locale)}}</h2>
      <hr>
      <!-- Rounded switch -->
      <label class="switch mt-3" >
        <input type="checkbox" v-on:click="toggleLanguage()"/>
        <span class="slider round"></span>        
      </label>

      <h5>{{ locale }}</h5>
      <div></div>
      <div class="form-row my-5">
        <div class="col">
          <input
            type="text"
            class="form-control"
            :placeholder="'firstName' | translate(locale)"
            v-model="form.firstName"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            :placeholder="'lastName' | translate(locale)"
            v-model="form.prenom"
            v-bind:firstName="placeholder.firstName | translate(locale)"
          />
        </div>
      </div>
      <div class="form-row my-5">
        <div class="col">
          <input
            type="email"
            class="form-control"
            :placeholder="'email' | translate(locale)"
            v-model="form.courriel"
          />
        </div>
        <div class="col">
          <select id="inputState" class="form-control">
            <option
              v-for="(option, index) in form.categories"
              v-bind:key="index"
            >
              {{ option | translate(locale) }}
            </option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-dark">{{'submit' | translate(locale)}}</button>
    </form>
  </div>
</template>

<script>
import { TRANSLATIONS } from "../mixins/translateMixin";
export default {
  mixins: [TRANSLATIONS],
  name: "Contact",
  methods: {
      toggleLanguage() {
        if(this.locale === "EN"){
            this.locale = "FR"
        }else{
            this.locale = "EN"
        }
      },
  },
  data: function() {
    return {
        placeholder: {
        lastName: "lastName",
        firstName: "firstName",
        email: "Courriel",
      },
      form: {
        titre: "Formulaire de contact",
        nom: "",
        prenom: "",
        courriel: "",
        categories: ["choisir", "soutien", "feedback", "bug"],
        btnTxt: "Soumettre"
      },
      selectedOption: null,
      locale: "EN",
    };
  },
};
</script>

<style>


form{
  padding: 5rem;
}
.contact-wrapper {
  min-height: 90vh;
  text-align: center;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

