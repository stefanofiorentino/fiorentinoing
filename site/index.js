Tasks = new Mongo.Collection('tasks');
 
if (Meteor.isClient) {
 
  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor']);
  
  function onReady() {
    angular.bootstrap(document, ['simple-todos']);
  }

  if (Meteor.isCordova)
    angular.element(document).on('deviceready', onReady);
  else
    angular.element(document).ready(onReady);
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
      
      $scope.$meteorSubscribe('tasks');

      $scope.tasks = $meteor.collection(function() {
        return Tasks.find({}, {sort: {createdAt: -1}})
      });
 
    }]);
}

 
if (Meteor.isServer) {
  Meteor.publish('tasks', function () {
    return Tasks.find();
  });
  Meteor.startup(function(){
      Tasks.insert({text: '<hr class=\"section-heading-spacer\">\n<div class=\"clearfix\"><\/div>\n<h2 class=\"section-heading\">Get your mobile website online in days, not months.<\/h2>\n<p class=\"lead\">Contact us to have your mobile friendly website and reach thousands more customers. Starting from 2015, <a href=\"http://www.inc.com/associated-press/google-to-prioritize-mobile-friendly-sites-in-search-results.html\">Google prioritize mobile mobile friendly<\/a> websites. Do you know it? Don\'t wait more.. <a href=\"mailto:stefano.fiore84@gmail.com\">Hire me<\/a>!<\/p>', createdAt: new Date(), image_url: '../img/IMG_1797.jpg'});
  });
}