'use strict';

angular.module('provaAddApp')
  .controller('MainCtrl', function ($scope) {

    $scope.todos = ['PROVA UNO', 'PROVA DUE', 'PROVA TRE'];
    $scope.addTodo = function () {

      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

   		 $scope.removeTodo = function (index) {
  		 $scope.todos.splice(index, 1);
};
  });