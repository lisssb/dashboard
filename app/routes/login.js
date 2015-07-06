import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    console.log(this);
    //this.set('username', '999');
  },
  model(){
    var router = this;
    var logged = this.get('username');
    Ember.run.next(function() {
      if (!logged) {
        router.transitionTo('login');
      } else {
          router.transitionTo('gridster');
        }
    });
  }
});
