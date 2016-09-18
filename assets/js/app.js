var myApp = angular.module('universe', ['ngMaterial']);

myApp.directive('plan', function() {
  return {
    restrict: "E",
    templateUrl: "../templates/planet.html",
    bindToController: true,
    link: function(scope, elem, attr) {
      var obj = document.getElementById(scope.planet.name);
      TweenMax.to(obj, scope.planet.duration, {
        rotation: 360,
        transformOrigin: scope.planet.origin,
        repeat: -1,
        ease: Linear.easeNone
      });
    }
  };
});

myApp.directive('fullpage', function() {
  return {
    restrict: "EA",
    link: function(scope, elem, attr) {
      $('#fullpage').fullpage({

      });
    }
  };
});


myApp.controller('solarSystem', ['$scope', "planets", function($scope, planets) {

  $scope.planets = planets;

}]);
