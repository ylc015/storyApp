'use strict';

describe('Controller: StoryEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StoryEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoryEditCtrl = $controller('StoryEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StoryEditCtrl.awesomeThings.length).toBe(3);
  });
});
