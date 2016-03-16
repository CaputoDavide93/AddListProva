'use strict';

angular.module('addListApp')
  .controller('MainCtrl', function ($scope) {
		var i= 3;
    $scope.todos = ['PROVA 1', 'PROVA 2'];
    	$scope.addTodo = function () {
      	$scope.todo = 'PROVA ' + i;
        $scope.todos.push($scope.todo);
            	i ++;
            	$scope.todo = '';

    };

   		 $scope.removeTodo = function (index) {
  		 $scope.todos.splice(index, 1);
};
  });