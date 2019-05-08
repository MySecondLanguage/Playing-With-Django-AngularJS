/**

app.controller('display', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.userid = $routeParams.userid;
    $scope.name = $routeParams.name;
    $scope.email = $routeParams.email;
    $scope.phone = $routeParams.phone;
}]);

app.controller('inputCtrl', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate) {
    $scope.userid = null;
    $scope.name = null;
    $scope.email = null;
    $scope.phone = null;

    $scope.PassDataToDisplyThroughUrl = function() {
        var url = $interpolate('/sumurl/{{ userid }}/{{ name }}/{{ email }}/{{ phone }}')($scope);
        console.log(url);
        $location.path(url);
    };
}]);

**/

app.controller('inputCtrl', function ($scope, $http) {
    $scope.formModel = {};

    $scope.onSubmit = function () {
        console.log("hey, i am submitting");
        console.log($scope.formModel);

        $http.post('http://127.0.0.1:8000/api/v1/contact/', $scope.formModel).
        success(function (data) {
            console.log(":)");
        }).error(function (data) {
            console.log(":(");
        });
    };
});

