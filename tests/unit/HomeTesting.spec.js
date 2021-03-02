import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";

describe("Home component testing : ", () => {
  // On s'assure que le composant importer est une instance de Vue
  test("Home is a vue instance: ", () => {
    const wrapper = mount(Home);
    expect(wrapper.vm).toBeTruthy();
  });

  // If the variable LoggedIn returns true or false when the component load to successfully
  // render the appropriate component
  test("LoggedIn returns true or false", () => {
    const wrapper = mount(Home);
    // expect(wrapper.text()).toContain('Michael')
    // expect(wrapper.props().component).toBe('HomeNotLogged');
    // expect(wrapper.props().loggedIn).toEqual(true);
    expect(wrapper.vm.loggedIn).toBe(true || false)
  });
});


// describe("Checking if home is a vue Instance : ", () => {
//   test("Is a vue instance", () => {
//     const wrapper = mount(Home, {
//       propsData: {
//         home: {
//           name: "Homesdsadasdas",
//         },
//       },
//     });
//     expect(wrapper.vm).toBeTruthy();
//   });
