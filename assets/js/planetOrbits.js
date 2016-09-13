
window.onload = function() {
  var Mercury = document.getElementById("Mercury");
  TweenMax.to(Mercury, 1, {
    rotation: 360,
    transformOrigin: "0 -45px",
    repeat: -1,
    ease: Linear.easeNone
  });

  var Venus = document.getElementById("Venus");
  TweenMax.to(Venus, 2, {
    rotation: 360,
    transformOrigin: "0 -70px",
    repeat: -1,
    ease: Linear.easeNone
  });

  var Earth = document.getElementById("Earth");
  TweenMax.to(Earth, 3, {
    rotation: 360,
    transformOrigin: "0 -110px",
    repeat: -1,
    ease: Linear.easeNone
  });

  var Mars = document.getElementById("Mars");
  TweenMax.to(Mars, 4, {
    rotation: 360,
    transformOrigin: "0 -150px",
    repeat: -1,
    ease: Linear.easeNone
  });

  var Jupiter = document.getElementById("Jupiter");
  TweenMax.to(Jupiter, 5, {
    rotation: 360,
    transformOrigin: "0 -190px",
    repeat: -1,
    ease: Linear.easeNone
  });

  var Saturn = document.getElementById("Saturn");
  TweenMax.to(Saturn, 6, {
    rotation: 360,
    transformOrigin: "0 -245px",
    repeat: -1,
    ease: Linear.easeNone
  });

  var Uranus = document.getElementById("Uranus");
  TweenMax.to(Uranus, 7, {
    rotation: 360,
    transformOrigin: "0 -295px",
    repeat: -1,
    ease: Linear.easeNone
  });

  var Neptune = document.getElementById("Neptune");
  TweenMax.to(Neptune, 8, {
    rotation: 360,
    transformOrigin: "0 -340px",
    repeat: -1,
    ease: Linear.easeNone
  });
};
