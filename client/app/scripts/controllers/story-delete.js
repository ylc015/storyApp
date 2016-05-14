'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StoryDeleteCtrl
 * @description
 * # StoryDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
 .controller('StoryDeleteCtrl', function (
  $scope,
  $routeParams,
  Story,
  $location
) {
  $scope.story = Story.one($routeParams.id).get().$object;
  $scope.deleteStory = function() {
    $scope.story.remove().then(function() {
      $location.path('/story');
    });
  };
  $scope.back = function() {
    $location.path('/story/' + $routeParams.id);
  };
  });
