'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './nameSearch.routes';

export class NameSearchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('runningphotosApp.nameSearch', [uiRouter])
  .config(routes)
  .component('nameSearch', {
    template: require('./nameSearch.html'),
    controller: NameSearchComponent,
    controllerAs: 'nameSearchCtrl'
  })
  .name;
