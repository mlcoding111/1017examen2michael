import { mount } from "@vue/test-utils";
import Footer from "../../src/components/layout/Footer.vue";

describe("Footer component testing : ", () => {
  // On s'assure que le composant importer est une instance de Vue
  const wrapper = mount(Footer)
  test("Footer is a vue instance: ", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  // On s'assure que le composant Footer contient bien un tag <footer>
  test("Footer contains a <footer> tag", () => {
    const tag = wrapper.find("footer");
    expect(tag.element.tagName).toBe("FOOTER");
  });
});
