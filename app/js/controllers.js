'use strict';

/* Controllers */

function SignupCtrl() {}
SignupCtrl.$inject = [];

function LoginCtrl() {}
LoginCtrl.$inject = [];

function SubjectListCtrl($scope, Subject) {
    $scope.subjects = Subject.query();
    $scope.orderProp = 'name';
}

function SubjectDetailCtrl($scope, $routeParams, Subject) {
    $scope.subject = Subject.get({subjectId: $routeParams.subjectId});
}

function MyCtrl1() {}
MyCtrl1.$inject = [];

function MyCtrl2() {}
MyCtrl2.$inject = [];
