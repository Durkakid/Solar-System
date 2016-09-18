angular.module('universe').factory('planets', function(){
  var planets = [{
    name: "Sun",
    width: "60px",
    height: "60px",
    background: "#FCD440",
  }, {
    name: "Mercury",
    width: "10px",
    height: "10px",
    background: "#888999",
    shadow: "#444",
    origin:"0 -45px",
    duration: 1,
    info: {
      orbit: "87.969 Earth Days",
      rotation: "58.6461 Earth Days",
      mass: "5% of Earth",
      volume: "5% of Earth",
      distance: "57 million kilometers"
    }
  }, {
    name: "Venus",
    width: "25px",
    height: "25px",
    background: "linear-gradient(90deg, #AC6339, #915430)",
    origin:"0 -70px",
    duration: 2,
    info: {
      orbit: "224.701 Earth Days",
      rotation: "243.16 Earth Days",
      mass: "81% of Earth",
      volume: "86% of Earth",
      distance: "107 million kilometers"
    }
  }, {
    name: "Earth",
    width: "25px",
    height: "25px",
    background: "linear-gradient(90deg, #3E8EBB, #357aa0)",
    origin:"0 -110px",
    duration: 3,
    info: {
      orbit: "365.25 Days",
      rotation: "23 hours & 56 minutes",
      mass: "5.97×10^24 kilograms",
      volume: "1 trillion cubic kilometers",
      distance: "150 million kilometers"
    }
  }, {
    name: "Mars",
    width: "25px",
    height: "25px",
    background: "linear-gradient(90deg, #6F3125, #54251c)",
    origin:"0 -150px",
    duration: 4,
    info: {
      orbit: "686.98 Earth Days",
      rotation: "24 hours 37 minutes",
      mass: "10% of Earth",
      volume: "15% of Earth",
      distance: "229 million kilometers"
    }
  }, {
    name: "Jupiter",
    width: "40px",
    height: "40px",
    background: "linear-gradient(90deg, #3D2C14, #22190b)",
    origin:"0 -190px",
    duration: 5,
    info: {
      orbit: "4332.59 Earth Days",
      rotation: "9 hours 55 minutes",
      mass: "317 times more than Earth's",
      volume: "1318 times more than Earth's",
      distance: "777 million kilometers"
    }
  }, {
    name: "Saturn",
    width: "35px",
    height: "35px",
    background: "linear-gradient(90deg, #E97340, #e55c20)",
    origin:"0 -245px",
    duration: 6,
    info: {
      orbit: "10,759.2 Days",
      rotation: "10 hours 13 minutes",
      mass: "95 times more than Earth's",
      volume: "744 times more than Earth's",
      distance: "1,429 million kilometers"
    }
  }, {
    name: "Uranus",
    width: "30px",
    height: "30px",
    background: "linear-gradient(90deg, #337799, #2a627e)",
    origin:"0 -295px",
    duration: 7,
    info: {
      orbit: "30,684 Earth Days",
      rotation: "17.2 hours",
      mass: "14.6 times more than Earth's",
      volume: "67 times more than Earth's",
      distance: "2,871 million kilometers"
    }
  }, {
    name: "Neptune",
    width: "30px",
    height: "30px",
    background: "linear-gradient(90deg, #6ACDC0, #4fc4b5)",
    origin:"0 -340px",
    duration: 8,
    info: {
      orbit: "60,190 Earth Days",
      rotation: "16 hours 17 minutes",
      mass: "17 times more than Earth's",
      volume: "57 times more than Earth's",
      distance: "4,496 million kilometers"
    }
  }];
  return planets;
});
