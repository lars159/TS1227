var app = angular.module("app", []);


app.controller("ParentCtrl", function Ctrl($scope) {
    $scope.traffic = {};
    $scope.traffic.message = "Stop på E4";

});
               
app.controller("ChildCtrl", function Ctrl($scope) {

});