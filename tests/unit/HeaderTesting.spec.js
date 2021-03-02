import { mount } from "@vue/test-utils";
import { RouterLinkStub } from '@vue/test-utils';
import Header from "../../src/components/layout/Header.vue";

describe("Header component testing : ", () => {
     // On s'assure que le composant importer est une instance de Vue
      // Étant donnée que le composant contient un RouterLink , il faut importer RouterLinkStub pour éviter un erreur
      const wrapper = mount(Header, {
        stubs: {
          RouterLink: RouterLinkStub
        }
      });
  test("Header is a vue instance: ", () => {
    expect(wrapper.vm).toBeTruthy();
  });
  
  test("Locale returns EN or FR only: ", () => {
    // Si la variable locale retourne English(EN) or French(FR)
    expect(wrapper.vm.locale).toBe("EN" || "FR")
  });

  test("Header contains a <nav> tag", () => {
    const tag = wrapper.find("nav");
    expect(tag.element.tagName).toBe('NAV')
  });
});