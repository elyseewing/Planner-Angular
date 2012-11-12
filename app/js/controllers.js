'use strict';

/* Controllers */

function SignupCtrl($scope, User) {
    $scope.user = User.$new()

    $scope.save = function() {
        User.add($scope.user);
    };
}

function LoginCtrl($scope, $http) {
    $scope.save = function() {
        $http.put('', $scope.user);
    };
}

function SubjectListCtrl($scope, Subject) {
    $scope.subjects = Subject.query();
    $scope.orderProp = 'name';
}

function SubjectDetailCtrl($scope, $routeParams, Subject) {
    $scope.subject = Subject.get({subjectId: $routeParams.subjectId});
}