'use strict';

describe('Controller: StoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoriesCtrl = $controller('StoriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StoriesCtrl.awesomeThings.length).toBe(3);
  });
});
