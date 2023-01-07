$(document).ready(function(){
  // init scrollmagic
  var controller = new ScrollMagic.Controller();

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement:'#main-1',
  })
  .setClassToggle('#main-1', 'fade-in') // add class to main-2
  .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement:'#main-2',
  })
  .setClassToggle('#main-2', 'fade-in') // add class to main-2
  .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement:'#main-3',
  })
  .setClassToggle('#main-3', 'fade-in') // add class to main-2
  .addTo(controller);
})