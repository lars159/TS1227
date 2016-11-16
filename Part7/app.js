angular.module('TrafficApp', [])
  .controller('TrafficController', function($scope, $http) {
     $http.get("http://api.sr.se/api/v2/traffic/messages?format=json ").then(function(response){
         $scope.trafficList = response.data.messages;
    });
    
    $scope.addTraffic = function() {
      $scope.trafficList.push({title : $scope.todoText, done:false});
      $scope.msg = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.trafficList, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.trafficList;
      $scope.trafficList = [];
      angular.forEach(oldTodos, function(traffic) {
        if (!traffic.done) $scope.trafficList.push(traffic);
      });
    };
  });