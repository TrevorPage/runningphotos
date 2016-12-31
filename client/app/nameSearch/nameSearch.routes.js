'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('nameSearch', {
      url: '/nameSearch',
      template: '<name-search></name-search>'
    });
}
