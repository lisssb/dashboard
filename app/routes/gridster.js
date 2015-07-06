import Ember from 'ember';

const toObj = (value) => Ember.Object.create({value});

export default Ember.Route.extend({
  model: function() {
    return Ember.A(['1111111111', 'something', 'dark', 'side'].map(toObj));
  }
});
