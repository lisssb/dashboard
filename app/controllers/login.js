import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
  login : function(){
    $.post("http://88.12.28.199/", {
      username: this.get("username"),
      password: this.get("password")
    }).then(function() {
      //this.transitionToRoute('index');
    }, function() {
      //this.transitionToRoute('index');
      this.set("loginFailed", true);
    }.bind(this));
  }
}
});
