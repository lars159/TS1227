angular.module("app", []).controller("Ctrl", function Ctrl($scope) {
    $scope.message = "Waiting 2000ms for update";

    setTimeout(function () {
        $scope.$apply(function(){
            $scope.message = "Timeout called!";
        })
        // AngularJS unaware of update to $scope
    }, 2000);
}
);