// Translate using filters


export const TRANSLATIONS = {
  en: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Mail",
      titre: "Contact form",
      nom: "",
      prenom: "",
      courriel: "",
      categories: ["Please choose..", "Support", "Feedback", "Bug"],
      btnTxt: "Submit",
      submit: "Soumettre",
      soutien: "Support",
      feedback: "Feedback",
      choisir: "Please choose..",
      bug: "Bugs",
      contactTitle: "Contact Form",
      home: "Home",
      contact: "Contact",
      projets: "Projects",
  },
  fr: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Courriel",
      titre: "Formulaire de contact",
      nom: "",
      prenom: "",
      courriel: "",
      categories: ["Veuillez choisir..", "Soutien", "Commentaire", "Erreur"],
      btnTxt: "Soumettre",
      submit: "Submit",
      soutien: "Soutien",
      feedback: "Commentaire",
      choisir : "Veuillez choisir..",
      bug: "Erreurs",
      contactTitle: "Form de contact",
      home: "Accueil",
      contact: "Contact",
      projets: "Projets",
    },
  filters: {
    translate: function (value, locale) {      
        // if language is FR
        if (locale === 'FR') {
            let keys = Object.keys(TRANSLATIONS.fr);
            for (let i = 0; i < keys.length; i++) {
                    return TRANSLATIONS.fr[value]
            }
        }
        /* if language is EN */
         else if (locale === 'EN') {
             let keys = Object.keys(TRANSLATIONS.en);
             for (let i =0;i < keys.length;i++){
                     return TRANSLATIONS.en[value]
            }
        }
    }
},
};