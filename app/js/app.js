'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signup', {templateUrl: 'partials/signup.html', controller: SignupCtrl});
    $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: LoginCtrl});
    $routeProvider.when('/subjects', {templateUrl: 'partials/subject-list.html', controller: SubjectListCtrl});
    $routeProvider.when('/subjects/:subjectId', {templateUrl: 'partials/subject-detail.html', controller: SubjectDetailCtrl});
    $routeProvider.when('/items/:itemId', {templateUrl: 'partials/item-detail.html', controller: ItemDetailCtrl});
    //$routeProvider.when('/items/:itemId/edit', {templateUrl: 'partials/item-edit.html', controller: ItemEditCtrl});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
