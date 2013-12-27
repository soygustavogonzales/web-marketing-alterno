$(document).ready(function() {
   $.backstretch([
    "../images/servicios/fondos/1.jpg",
    "../images/servicios/fondos/2.jpg",
    "../images/servicios/fondos/3.jpg",
    "../images/servicios/fondos/4.jpg",
    "../images/servicios/fondos/5.jpg"
  ], {
      fade: 750,
      duration: 4000
  });
  var centro = $('.centro');

  var fondoSlide = $('.backstretch');
  centro.append(fondoSlide);
})

