import { mount } from "@vue/test-utils";
import Contact from "../../src/views/Contact.vue";

describe("Contact component testing : ", () => {
    // On s'assure que le composant importer est une instance de Vue
      const wrapper = mount(Contact);
    test("Contact is a vue instance: ", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("Contact contains a <form> tag", () => {
    const tag = wrapper.find("form");
    expect(tag.element.tagName).toBe('FORM')
  });

  // On test la variable local de contact
  test("Locale returns EN or FR only: ", () => {
    // Si la variable locale retourne English(EN) or French(FR)
    expect(wrapper.vm.locale).toBe("EN" || "FR")
  });
  
  // On test le language du bouton soumettre selon la variable locale
  test("Submit bouton translate work", () => {
    const element = wrapper.find("#submitBtn"); 
    // SI locale est anglais le bouton doit être Soumettre
    expect(element.element.textContent).toBe('Soumettre' || 'Submit' )
  });

});