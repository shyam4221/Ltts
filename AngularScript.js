app.controller('MyController', function ($scope, $http, $window, $filter) {


    $scope.Message = "Syam";
    $scope.Users = [];


   


$http.get('https://api.github.com/users')
.then(function(response) {
    //console.log(response.data)
  $scope.Users = response.data;
  debugger;
  console.log($scope.Users )
});





});