'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StoryEditCtrl
 * @description
 * # StoryEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('StoryEditCtrl', function (
  $scope,
  $routeParams,
  Story,
  $location
) {
  $scope.editStory = true;
  $scope.story = {};
  Movie.one($routeParams.id).get().then(function(story) {
    $scope.story = story;
    $scope.saveStory = function() {
      $scope.story.save().then(function() {
        $location.path('/story/' + $routeParams.id);
      });
    };
  });
  });
