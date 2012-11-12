'use strict';

/* Services */


angular.module('myApp.services', ['ngResource']).
    factory('Subject', function($resource) {
        return $resource('/subjects/:subjectId.json', {}, {
            query: {method:'GET', params:{subjectId:'subjects'}, isArray:true}
        });
    });