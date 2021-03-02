// Translate using filters

export const TRANSLATIONS = {
    // On déclare le contenu en anglais et francais
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
      apropos: "About"

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
      apropos: "A propos"
    }
};

export const TranslateMixin = {
    data: function() {
        return {
            hey: "EN"
        }
    },
    filters: {
        translate: function (value, locale) {      
            // Si la variable locale retourne "FR" , on fait une boucle et on va changer la langue de tout les mots en francais
            if (locale === 'FR') {
                let keys = Object.keys(TRANSLATIONS.fr);
                for (let i = 0; i < keys.length; i++) {
                        return TRANSLATIONS.fr[value]
                }
            }
            // Si la variable locale retourne "EN" , on fait une boucle et on va changer la langue de tout les mots en francais
             else if (locale === 'EN') {
                 let keys = Object.keys(TRANSLATIONS.en);
                 for (let i =0;i < keys.length;i++){
                         return TRANSLATIONS.en[value]
                }
            }
        }
}
}

// // Translate using filters

// export const TRANSLATIONS = {
//     // On déclare le contenu en anglais et francais
//   en: {
//       firstName: "First Name",
//       lastName: "Last Name",
//       email: "Mail",
//       titre: "Contact form",
//       nom: "",
//       prenom: "",
//       courriel: "",
//       categories: ["Please choose..", "Support", "Feedback", "Bug"],
//       btnTxt: "Submit",
//       submit: "Soumettre",
//       soutien: "Support",
//       feedback: "Feedback",
//       choisir: "Please choose..",
//       bug: "Bugs",
//       contactTitle: "Contact Form",
//       home: "Home",
//       contact: "Contact",
//       projets: "Projects",
//       apropos: "About"

//   },
//   fr: {
//       firstName: "Prénom",
//       lastName: "Nom",
//       email: "Courriel",
//       titre: "Formulaire de contact",
//       nom: "",
//       prenom: "",
//       courriel: "",
//       categories: ["Veuillez choisir..", "Soutien", "Commentaire", "Erreur"],
//       btnTxt: "Soumettre",
//       submit: "Submit",
//       soutien: "Soutien",
//       feedback: "Commentaire",
//       choisir : "Veuillez choisir..",
//       bug: "Erreurs",
//       contactTitle: "Form de contact",
//       home: "Accueil",
//       contact: "Contact",
//       projets: "Projets",
//       apropos: "A propos"
//     },
//   filters: {
//     translate: function (value, locale) {      
//         // Si la variable locale retourne "FR" , on fait une boucle et on va changer la langue de tout les mots en francais
//         if (locale === 'FR') {
//             let keys = Object.keys(TRANSLATIONS.fr);
//             for (let i = 0; i < keys.length; i++) {
//                     return TRANSLATIONS.fr[value]
//             }
//         }
//         // Si la variable locale retourne "EN" , on fait une boucle et on va changer la langue de tout les mots en francais
//          else if (locale === 'EN') {
//              let keys = Object.keys(TRANSLATIONS.en);
//              for (let i =0;i < keys.length;i++){
//                      return TRANSLATIONS.en[value]
//             }
//         }
//     }
// },
// };