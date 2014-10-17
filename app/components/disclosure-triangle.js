import Ember from 'ember';

export default Ember.Component.extend({
  isDisclosed: false,
  isDiscloseeVisible: true,
  actions: {
    toggleDisclosure: function(){
      this.toggleProperty('isDisclosed');
    }
  }
});
