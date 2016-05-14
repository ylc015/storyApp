'use strict';

describe('Controller: StoryDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StoryDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoryDeleteCtrl = $controller('StoryDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StoryDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
