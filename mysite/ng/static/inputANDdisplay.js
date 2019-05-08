app.controller('display', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.userid = $routeParams.userid;
    $scope.name = $routeParams.name;
    $scope.email = $routeParams.email;
    $scope.phone = $routeParams.phone;
}]);

app.controller('inputCtrl', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate) {
    $scope.userid = 0;
    $scope.name = 'YOUR NAME';
    $scope.email = 'jhonedoe@mail.com';
    $scope.phone = "0058";

    $scope.PassDataToDisplyThroughUrl = function() {
        var url = $interpolate('/sumurl/{{ userid }}/{{ name }}/{{ email }}/{{ phone }}')($scope);
        //console.log(url);
        $location.path(url);
    }
}]);