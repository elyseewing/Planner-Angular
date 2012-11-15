'use strict';

/* Services */

var app = angular.module('myApp.services', ['ngResource']);

app.factory('User', function($resource) {
    return $resource('http://myepicplanner.com/users/:userId?format=json', {}, {
        //'initialize' : { method: 'GET', params: { action : 'initialize', format: 'json' }, isArray : true },
        'save': { method: 'POST' },
        'query' : { method: 'GET', isArray : true },
        'update': { method: 'PUT' }
    });
});

app.factory('Subject', function($resource) {
    return $resource('http://myepicplanner.com/subjects/:subjectId?format=json', {}, {
        'save': { method: 'POST' },
        'query' : { method: 'GET', isArray : true },
        'update': { method: 'PUT' }
    });
});

app.factory('Item', function($resource) {
    return $resource('http://myepicplanner.com/items/:itemId?format=json', {}, {
        'save': { method: 'POST' },
        'query' : { method: 'GET', isArray : true },
        'update': { method: 'PUT' }
    });
});

app.factory('List', function($resource) {
    return $resource('http://myepicplanner.com/lists/:listId?format=json', {}, {
        'save': { method: 'POST' },
        'query' : { method: 'GET', isArray : true },
        'update': { method: 'PUT' }
    });
});

app.factory('Todo', function($resource) {
    return $resource('http://myepicplanner.com/todos/:todoId?format=json', {}, {
        'save': { method: 'POST' },
        'query' : { method: 'GET', isArray : true },
        'update': { method: 'PUT' }
    });
});