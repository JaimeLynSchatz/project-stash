function TodoCtrl($scope) {

	$scope.todos = [
		{text: 'Learn AngularJS', done: false},
		{text: 'Build an angular app', done: false}
	];

	//$scope.getTotalTodos = function () {
	//	return $scope.todos.length;
	//};
	// keeps track of your todos
	$scope.totalTodos = 15; //$scope.todos.length;

	$scope.clearCompleted = function () {
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});
	};

	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.formTodoText, done:false})
		$scope.formTodoText = '';  // clears the text input after submit
	};
}