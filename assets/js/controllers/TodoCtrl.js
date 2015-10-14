/**
 * Created by MrHant on 13.10.2015.
 */
define(function () {
  return ['$scope', '$http', function ($scope, $http) {

    $scope.todos = [];

    $http.get('/task/find').success(function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }

      $scope.todos = data;
    });


    //Добавление новой задачи
    $scope.addTodo = function () {

      if (!$scope.newTodo.length) {
        return;
      }

      $http.get('/task/create?title=' + $scope.newTodo).success(function (data) {

        $scope.todos.push({
          title: $scope.newTodo
        });

        $scope.newTodo = '';
      });

      $http.get('/task/find').success(function (data) {
        for (var i = 0; i < data.length; i++) {
          data[i].index = i;
        }

        $scope.todos = data;
      });
    };

    //Редактирование существующей задачи
    $scope.editTodo = function (todo) {
      $scope.editedTodo = todo;
    };


    //Удаление задачи
    $scope.removeTodo = function (todo) {
      console.log(todo);
      $http.delete('/task/' + todo.id).success(function () {
        $scope.todos.splice($scope.todos.indexOf(todo), 1);
      });

    };

  }]
});
