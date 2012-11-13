'use strict';

/* Controllers */

function SignupCtrl($scope) {
    //$scope.user = User.$new()

    $scope.save = function() {
        console.log('Saving user: ');
        console.log($scope.user);
    };
}

function LoginCtrl($scope, $http) {
    $scope.save = function() {
        console.log('Authenticating user: ');
        console.log($scope.user);
    };
}

function SubjectListCtrl($scope, Subject) {
    $scope.subjects = Subject.query();
    $scope.orderProp = 'name';

    $scope.save = function() {
        //$scope.subject.userId = 'blah';
        console.log('Saving subject: ');
        console.log($scope.subject);
    };
}

function SubjectDetailCtrl($scope, $routeParams, Subject) {
    $scope.subject = Subject.get({subjectId: $routeParams.subjectId});
}

function ItemDetailCtrl($scope, $routeParams, Item) {
    $scope.item = Item.get({itemId: $routeParams.itemId});

    $scope.saveList = function() {
        console.log('Saving new list item: ');
        console.log($scope.list);
    };

    $scope.saveTodo = function() {
        console.log('Saving new to-do list item: ');
        console.log($scope.todo);
    };

    $scope.remove = function() {
        console.log('Removing item with ID: ' + $routeParams.itemId);
    }
}