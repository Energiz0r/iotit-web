import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model: function(params){
    return Ember.$.get('https://secure-sands-1441.herokuapp.com/api/projects').then(function(projects){
      var list = $.grep(projects.projects, function(project){
        return project.id === params.project_id;
      });
      console.log(list[0].data);
      return list[0];
    });
  }
});
