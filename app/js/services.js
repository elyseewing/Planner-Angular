'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

angular.module('myApp.services', ['ngResource']).
    factory('Subject', function($resource) {
        return $resource('/subjects/:subjectId.json', {}, {
            query: {method:'GET', params:{subjectId:'subjects'}, isArray:true}
        });
    });

