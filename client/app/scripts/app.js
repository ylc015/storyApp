'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl'
      })
      .when('/stories', {
        templateUrl: 'views/stories.html',
        controller: 'StoriesCtrl',
        //controllerAs: 'stories'
      })
      .when('/create/story', {
        templateUrl: 'views/story-add.html',
        controller: 'StoryAddCtrl',
        controllerAs: 'storyAdd'
      })
      .when('/story/:id', {
        templateUrl: 'views/story-view.html',
        controller: 'StoryViewCtrl',
        controllerAs: 'storyView'
      })
      .when('/story/:id/delete', {
        templateUrl: 'views/story-delete.html',
        controller: 'StoryDeleteCtrl',
        controllerAs: 'storyDelete'
      })
      .when('/story/:id/edit', {
        templateUrl: 'views/story-edit.html',
        controller: 'StoryEditCtrl',
        controllerAs: 'storyEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  })
  .factory('Story', function(MovieRestangular) {
    return MovieRestangular.service('story');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
