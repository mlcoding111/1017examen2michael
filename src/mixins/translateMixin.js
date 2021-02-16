

export const TRANSLATIONS = {
    methods: {
        translate(){
            if(this.locale == "EN"){
                this.placeholder = this.en[0].placeholder;
                this.form = this.en[0].form;
            }else{
                this.placeholder = this.fr[0].placeholder;
                this.form = this.fr[0].form;
            }
        }
    },
    data(){
        return{
            en: [
                {
                    placeholder: {
                        firstName: "FirstName",
                        lastName: "LastName",
                        email: "Mail",
                    },
                    form: {
                        titre: "Contact form",
                        nom: "",
                        prenom: "",
                        courriel: "",
                        categories: ["Please choose.." , "Support", "Feedback", "Bug"],
                        btnTxt: "Submit"
                    }
                }
            ],
            fr: [
                {
                    placeholder: {
                        firstName: "Prénom",
                        lastName: "Nom",
                        email: "Courriel"
                    },
                    form: {
                        titre: "Formulaire de contact",
                        nom: "",
                        prenom: "",
                        courriel: "",
                        categories: ["Veuillez choisir..", "Soutien", "Commentaire", "Erreur"],
                        btnTxt: "Soumettre"
                    }
                }
            ],
        }
    },   
    created(){        
        this.translate();
     },
  
};



// export const TRANSLATIONS = {
//     methods: {
//         translate(key){
//             return TRANSLATIONS[this.$root.locale][key];
//         }
//     },
//     data(){
//         return{
//             en: {
//                 firstName: "Firstname",
//                 lastName: "Lastname",
//                 email: "Mail",
//             },
//             fr: {
//                 firstName: "Prénom",
//                 lastName: "Nom",
//                 email: "Courriel"
//             }
//         }
//     },   
//     created(){        
//         if(this.locale === "en"){
//             this.placeholder = this.en;
//         }else{
//             this.placeholder = this.fr;
//         }
//         console.log(Object.keys(this.placeholder).filter(item => item === "lastName"))
//      },
  
// };