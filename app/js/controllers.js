'use strict';

/* Controllers */

function SignupCtrl($scope) {
    $scope.breadcrumbs = new Array(
        ["Sign up", "#/signup"]
    );
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
    console.log($scope.subject);
}

function ItemNewCtrl($scope, $routeParams, Subject)
{
    $scope.subject = Subject.get({subjectId: $routeParams.subjectId});
    console.log('Subject: ');
    console.log($scope.subject);

    $scope.save = function() {
        $scope.item.subject_id = $routeParams.subjectId;
        console.log('Saving new item: ');
        console.log($scope.item);
    };
}

function ItemDetailCtrl($scope, $routeParams, Item) {
    $scope.item = Item.get({itemId: $routeParams.itemId});

    $scope.addList = function() {
        console.log('Saving new list item: ');
        console.log($scope.list);
    };

    $scope.addTodo = function() {
        console.log('Saving new to-do list item: ');
        console.log($scope.todo);
    };

    $scope.remove = function() {
        console.log('Removing item with ID: ' + $routeParams.itemId);
    };

    $scope.print = function() {
        console.log('Printing item with ID: ' + $routeParams.itemId);
    };

    $scope.save = function() {
        console.log('Updating item: ');
        console.log($scope.item);
    };
}

function ListDetailCtrl($scope, $routeParams, List) {
    $scope.list = List.get({listId: $routeParams.listId});
    console.log($scope.list);

    $scope.save = function() {
        console.log('Updating list: ');
        console.log($scope.list);
    };
}

function TodoDetailCtrl($scope, $routeParams, Todo) {
    $scope.todo = Todo.get({todoId: $routeParams.todoId});

    $scope.save = function() {
        console.log('Updating to-do: ');
        console.log($scope.todo);
    };
}