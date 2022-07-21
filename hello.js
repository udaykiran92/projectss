angular.module('myApp', []).controller('hello', function($scope) {
    $scope.firstName = "Abraham",
    $scope.lastName = "Lincon",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});