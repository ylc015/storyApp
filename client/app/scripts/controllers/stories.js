'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StoriesCtrl
 * @description
 * # StoriesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StoriesCtrl', function (
    $scope,
    Story
  ) {
    $scope.stories = Story.getList().$object;
    console.log('stories is ' + $scope.stories);
    console.log('stories length is ' + $scope.stories.length);
  });
