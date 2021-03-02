//import shallowMount
import {TranslateMixin} from '../../src/mixins/translateMixin';
import { shallowMount } from '@vue/test-utils';

describe("Tests de mixins", () => {
  const Component = {
    render(){},
    title: 'translate',
    mixins: [TranslateMixin]
  }
  test("Mixin contient une methode pour traduire les libellés", () => {
    shallowMount(Component) 
    // On essaie de storer la methode du filter "Translate" dans une variable
    let method = Component.mixins[0].filters.translate;
    let mixinContainTranslateMethod = false;

    // Si la methode a été trouvée , on change la variable a true
    if(method != undefined){
      console.log('Method exist')
      mixinContainTranslateMethod = true
    }
     // Si la methode a été trouvée , on va retourner true
    expect(mixinContainTranslateMethod).toBeTruthy()
  })
})