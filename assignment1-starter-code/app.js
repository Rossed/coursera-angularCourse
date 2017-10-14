(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.lunch = "";

  $scope.checkLunch = function () {
    $scope.messageColour = {color:'green'}
    $scope.borderColour = {border:'2px solid green'}
    if ($scope.lunch == undefined || $scope.lunch.length == 0) {
      $scope.message = "Please enter data first";
      $scope.messageColour = {color:'red'}
      $scope.borderColour = {border:'2px solid red'}
    } else {
      var items = $scope.lunch.split(",");
      var numItems = $scope.countLunchItems(items);
      if (numItems == 0) {
        $scope.message = "Please enter data first";
        $scope.messageColour = {color:'red'}
        $scope.borderColour = {border:'2px solid red'}
      } else if (numItems <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!"
      };
    }
  };

  $scope.countLunchItems = function(lunchItems) {
    var numItems = 0;
    for (var item in lunchItems) {
      lunchItems[item] = lunchItems[item].trim();
      if (lunchItems[item] != undefined && lunchItems[item].length > 0) {numItems++;}
    }
    return numItems;
  };

}

})();
