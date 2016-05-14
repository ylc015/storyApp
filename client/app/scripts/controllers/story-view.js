'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StoryViewCtrl
 * @description
 * # StoryViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('StoryViewCtrl', function (
  $scope,
  $routeParams,
  Story
) {
  $scope.viewStory = true;
  $scope.story = Story.one($routeParams.id).get().$object;
  });
