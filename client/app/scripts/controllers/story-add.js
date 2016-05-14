'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StoryAddCtrl
 * @description
 * # StoryAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('StoryAddCtrl', function (
  $scope,
  Story,
  $location
) {
  $scope.story = {};
  $scope.saveStory = function() {
    Movie.post($scope.story).then(function() {
      $location.path('/story');
    });
  };
  });
