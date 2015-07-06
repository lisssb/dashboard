import Ember from 'ember';

export default Ember.Controller.extend({
  onlyOneValue: Ember.computed(
    'model.firstObject',
    {
      get: function() {
        return this.get('model.firstObject.value');
      },
      set: function(key, value) {
        this.set('model.firstObject.value', value);
        return value;
      }
    }
  )
});
