var myApp = angular.module('universe', ['ngMaterial']);

myApp.controller('solarSystem', ['$scope', function($scope) {

  $scope.planets = [{
    name: "Sun",
    width: "60px",
    height: "60px",
    background: "#FCD440"
  }, {
    name: "Mercury",
    width: "10px",
    height: "10px",
    background: "linear-gradient(90deg, #453217, #2a1f0e)"
  }, {
    name: "Venus",
    width: "25px",
    height: "25px",
    background: "linear-gradient(90deg, #AC6339, #915430)"
  }, {
    name: "Earth",
    width: "25px",
    height: "25px",
    background: "linear-gradient(90deg, #3E8EBB, #357aa0)"
  }, {
    name: "Mars",
    width: "25px",
    height: "25px",
    background: "linear-gradient(90deg, #6F3125, #54251c)"
  }, {
    name: "Jupiter",
    width: "40px",
    height: "40px",
    background: "linear-gradient(90deg, #3D2C14, #22190b)"
  }, {
    name: "Saturn",
    width: "35px",
    height: "35px",
    background: "linear-gradient(90deg, #E97340, #e55c20)"
  }, {
    name: "Uranus",
    width: "30px",
    height: "30px",
    background: "linear-gradient(90deg, #337799, #2a627e)"
  }, {
    name: "Neptune",
    width: "30px",
    height: "30px",
    background: "linear-gradient(90deg, #6ACDC0, #4fc4b5)"
  }];
}]);
