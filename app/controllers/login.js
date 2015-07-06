import Ember from 'ember';

export default Ember.Controller.extend({
  timeout : null,
  //isSlowConnection: false,
  actions : {
    login : function(){
      this.setProperties({
        loginFailed: false,
        isProcessing: true
      });

      //this.set("timeout", setTimeout(this.slowConnection.bind(this), 5000));
      var request = Ember.$.post("http://192.168.1.45:3000/test", { "credentials" :{
        username: this.getProperties("username"),
        password: this.getProperties("password")
      }});
      request.then(this.success.bind(this), this.failure.bind(this));
    }
  },
  failure: function() {
    this.reset();
    this.setProperties({
      username : '',
      password : ''
    });
    //var model = this.controllerFor('login');
    this.set("loginFailed", true);
  },
  success: function() {
    this.transitionToRoute('index');
  },
  /*slowConnection: function() {
    this.set("isSlowConnection", true);
  },*/
  reset: function() {
    clearTimeout(this.get("timeout"));
    this.setProperties({
      isProcessing: false,
      //isSlowConnection: false
    });
  }
});
