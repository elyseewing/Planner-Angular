'use strict';

/* Services */

var app = angular.module('myApp.services', ['ngResource']);

app.factory('Subject', function($resource) {
    return $resource('http://myepicplanner.com/subjects/:subjectId?format=json', {});
});

app.factory('Item', function($resource) {
    return $resource('http://myepicplanner.com/items/:itemId?format=json', {});
});

app.factory('List', function($resource) {
    return $resource('http://myepicplanner.com/lists/:listId?format=json', {});
});

app.factory('Todo', function($resource) {
    return $resource('http://myepicplanner.com/todos/:todoId?format=json', {});
});