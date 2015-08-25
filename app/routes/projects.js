import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.get('https://secure-sands-1441.herokuapp.com/api/projects').then(function(data){
      return data.projects;
    });
  }
});
