
app.controller('filterCtrl', function($scope, $http) {
  $http.get("http://127.0.0.1:8000/api/v1/contact/?format=json")
  .then(function(response) {
      $scope.contacts = response.data;
  });
});