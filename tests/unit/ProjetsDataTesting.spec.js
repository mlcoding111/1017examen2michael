import { mount } from "@vue/test-utils";
import Projets from "../../src/views/Projets.vue";

describe("Projets component testing : ", () => {
  // On s'assure que le composant importer est une instance de Vue
      const wrapper = mount(Projets, {
        propsData: {
          project: 'project'
        }
      });
    test("Projets is a vue instance: ", () => {
    expect(wrapper.vm).toBeTruthy();
  });

   // On test si il y a exactement 5 projets dans la liste data de projets (projects)
   // Le test va fail car il y a exactement 3 projets dans la liste et non 5
   test("Test props array length", () => {
    expect(wrapper.vm.projects.length).toBe(5)
    // console.log(wrapper.vm.projects.length)
  });

});