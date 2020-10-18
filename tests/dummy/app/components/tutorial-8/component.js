import TutorialComponent from '../shared-tutorial/component';

// BEGIN-SNIPPET better-syntax-9
import { task } from 'ember-concurrency';

export default TutorialComponent.extend({
  result: null,

  findStores: task(function * () {
    let geolocation = this.geolocation;
    let store = this.store;

    let coords = yield geolocation.getCoords();
    let result = yield store.getNearbyStores(coords);
    this.set('result', result);
  }).drop(), // ++
});
// END-SNIPPET


