var myApp = angular.module('universe', ['ngMaterial']);

myApp.run(function($rootScope){
  $rootScope.tm = TweenMax;
});

myApp.directive('plan', function($rootScope) {
  return {
    restrict: "E",
    templateUrl: "../templates/planet.html",
    bindToController: true,
    link: function(scope, elem, attr) {
      console.log(scope.planet);
      var obj = document.getElementById(scope.planet.name);
      $rootScope.tm.to(obj, scope.planet.duration, {
        rotation: 360,
        transformOrigin: scope.planet.origin,
        repeat: -1,
        ease: Linear.easeNone
      });
    }
  };
});


myApp.controller('solarSystem', ['$scope', "planets", function($scope, planets) {

  $scope.planets = planets;

}]);
