this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/planet.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="info">\n  <div class="headlines">\n    <h1 class="md-headline">Orbit:</h1>\n    <h1 class="md-headline">Roation:</h1>\n    <h1 class="md-headline">Mass:</h1>\n    <h1 class="md-headline">Volume:</h1>\n    <h1 class="md-headline">Distance:</h1>\n  </div>\n  <div class="values">\n    <p>\n      {{planet.info.orbit}}\n    </p>\n\n    <p>\n      {{planet.info.rotation}}\n    </p>\n\n    <p>\n      {{planet.info.mass}}\n    </p>\n\n    <p>\n      {{planet.info.volume}}\n    </p>\n\n    <p>\n      {{planet.info.distance}}\n    </p>\n  </div>\n</section>\n';

}
return __p
};