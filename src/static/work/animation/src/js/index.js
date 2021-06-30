new WOW().init();

var scene = document.getElementById('scene1');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

var scene = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

$('[data-parallax]').each(function() {

  $(this).attr('data-image-src', $(this).prev().attr('src'))

}).parallax();

var rellax = new Rellax('.rellax');

