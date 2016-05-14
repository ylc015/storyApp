'use strict';

describe('Controller: StoryViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StoryViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoryViewCtrl = $controller('StoryViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StoryViewCtrl.awesomeThings.length).toBe(3);
  });
});
