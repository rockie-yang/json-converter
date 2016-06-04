(function() {
  var app = angular.module('app', []);
  var ctrlMain = function($scope, $http) {
    var onChangeLeftTheme = function(response) {
      $scope.repos = response;
    }
  }

  // the second parameter using an array
  // the last element of the array is the function
  // the previous element are parameters passed to the functoin
  //
  // in minimize process, the parameter name in function ctrl
  // might minized from $scope => s
  //
  // and pass it as array gives angular know that
  // which parameter should inject in when invoke ctrl
  app.controller('ctrlMain', ['$scope', '$http', ctrlMain]);

}());
