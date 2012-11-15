'use strict';

/* Controllers */

function SignupCtrl($scope, User) {
    $scope.breadcrumbs = new Array(
        ["Sign up", "#/signup"]
    );
    $scope.save = function() {
        $scope.user = User.save($scope.user);
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
        // populate user_id for new subject
        $scope.subject.userId = 1;
        $scope.subject = Subject.save($scope.subject);

        // reload subject model to include new subject
        $scope.items = Subject.query();
        window.location = "#/subjects";
    };
}

function SubjectDetailCtrl($scope, $routeParams, Subject) {
    $scope.subject = Subject.get({subjectId: $routeParams.subjectId});
}

function ItemNewCtrl($scope, $routeParams, Subject, Item)
{
    $scope.subject = Subject.get({subjectId: $routeParams.subjectId});

    $scope.uploadFiles = function(val) {
        $scope.file = val.files[0].toString();
    };

    $scope.save = function() {
        $scope.item.file = $scope.file;
        $scope.item.subject_id = $routeParams.subjectId;
        var item = Item.save($scope.item);
        console.log(item);
        window.location = "#/items/" + item.id; // HOW TO GET ID OF NEW ITEM
    };
}

function ItemDetailCtrl($scope, $routeParams, Item, List, Todo) {
    $scope.item = Item.get({itemId: $routeParams.itemId});

    $scope.addList = function() {
        // populate item_id for new list
        $scope.list.item_id = $routeParams.itemId;
        $scope.list = List.save($scope.list);

        // reload item model to include new list
        $scope.item = Item.get({itemId: $routeParams.itemId});
        window.location = "#/items/" + $routeParams.itemId;
    };

    $scope.addTodo = function() {
        // populate item_id for new todo
        $scope.todo.item_id = $routeParams.itemId;
        $scope.todo = Todo.save($scope.todo);

        // reload item model to include new todo
        $scope.item = Item.get({itemId: $routeParams.itemId});
        window.location = "#/items/" + $routeParams.itemId;
    };

    $scope.remove = function() {
        console.log('Removing item with ID: ' + $routeParams.itemId);
    };

    $scope.print = function() {
        console.log('Printing item with ID: ' + $routeParams.itemId);
    };

    $scope.save = function() {
        $scope.item = Item.update($scope.item);
        console.log($scope.item);

        $scope.item = Item.get({itemId: $routeParams.itemId});
        window.location = "#/items/" + $routeParams.itemId + "/edit";
    };
}

function ListDetailCtrl($scope, $routeParams, List) {
    $scope.list = List.get({listId: $routeParams.listId});

    $scope.save = function() {
        $scope.list = List.update($scope.list);

        $scope.list = List.get({listId: $routeParams.listId});
        window.location = "#/lists/" + $routeParams.listId + "/edit";
    };

    $scope.remove = function() {
        console.log('Removing list with ID: ' + $routeParams.listId);
    };
}

function TodoDetailCtrl($scope, $routeParams, Todo) {
    $scope.todo = Todo.get({todoId: $routeParams.todoId});

    $scope.save = function() {
        $scope.todo = Todo.update($scope.todo);

        $scope.todo = Todo.get({todoId: $routeParams.todoId});
        window.location = "#/todos/" + $routeParams.todoId + "/edit";
    };

    $scope.remove = function() {
        console.log('Removing todo with ID: ' + $routeParams.todoId);
    };
}