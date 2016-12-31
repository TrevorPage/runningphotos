'use strict';

describe('Component: NameSearchComponent', function() {
  // load the controller's module
  beforeEach(module('runningphotosApp.nameSearch'));

  var NameSearchComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    NameSearchComponent = $componentController('nameSearch', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
