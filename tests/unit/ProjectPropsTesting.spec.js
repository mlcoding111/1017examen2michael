import { mount } from "@vue/test-utils";
import Project from "../../src/components/Projet.vue";

describe("Project component testing : ", () => {
  // On s'assure que le composant importer est une instance de Vue
      const wrapper = mount(Project, {
        propsData: {
          project: 'project'
        }
      });
    test("Project is a vue instance: ", () => {
    expect(wrapper.vm).toBeTruthy();
  });
 // On test si le props retourne la bonne liste de projets avec le bon props
  test("The props containing the project list has the right name", () => {
    expect(wrapper.props().project).toBe('project')
  });

});

