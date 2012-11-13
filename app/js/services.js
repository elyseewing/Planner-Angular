'use strict';

/* Services */

var app = angular.module('myApp.services', ['ngResource']);

app.factory('Subject', function($resource) {
    return $resource('http://myepicplanner.com/subjects/:subjectId?format=json', {});
});

app.factory('Item', function($resource) {
    return $resource('http://myepicplanner.com/items/:itemId?format=json', {});
});