'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('fileUpload', function() {
    return function postLink(scope, iElement, iAttrs) {
        attrs.$observe('item.file', function(value) {
            console.log('item.file has changed to: ' + value);
        });
    }
    /*var directiveObj = {
        link: function linkFn(scope, elm, attrs) {
            attrs.$observe('item.file', function(value) {
                console.log('item.file has changed to: ' + value);
            });
        }
    };
    return directiveObj;*/
  });