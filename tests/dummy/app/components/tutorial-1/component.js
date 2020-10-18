import TutorialComponent from '../shared-tutorial/component';

// BEGIN-SNIPPET better-syntax-2
export default TutorialComponent.extend({
  result: null,
  isFindingStores: false, // ++
  actions: {
    findStores() {
      let geolocation = this.geolocation;
      let store = this.store;

      this.set('isFindingStores', true); // ++
      geolocation.getCoords()
        .then(coords => store.getNearbyStores(coords))
        .then(result => {
          this.set('result', result);
          this.set('isFindingStores', false); // ++
        });
    }
  },
});
// END-SNIPPET


