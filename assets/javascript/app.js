(function() {

    'use strict'

    var app = angular.module("taskApp", []); 

    app.controller("appCtrl", function($scope) {

        // array of tasks with seed data
        $scope.taskList = [
            {task:"Take a Quiz", done:false, completed:false},
            {task:"Buy Shirts", done:false, completed:false},
            {task:"Send Email", done:false, completed:false},
            {task:"Learn More Angular", done:false, completed:false}
        ];

        // adds items to list
        $scope.addItem = function() {
            if ($scope.taskInput !== "" && $scope.taskInput !== undefined) {
                $scope.taskList.push({task:$scope.taskInput, done:false, completed: false});
                $scope.taskInput = "";
            }
        };

        // deletes completed tasks
        $scope.deleteCompleted = function() {
            $scope.taskList = $scope.taskList.filter(function (item) {
                return !item.completed;
            });
        };

        // removes task items 
        $scope.removeItem = function(item) {
            var taskIndex = $scope.taskList.indexOf(item);
            $scope.taskList.splice(taskIndex, 1);
        };

    });

})();