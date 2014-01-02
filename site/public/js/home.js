;!function(){
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
      var dataSO = function(){
      var userAgent=navigator.userAgent;//devuelve una cadena con el nombre del navegador ,version, sistema operativo (nombre generico) del usuario,motor del navegador.
      var platform = navigator.platform;
      var getNameBrowser = function(string){
        var resq=/(msie)|(firefox)|(chrome)|(opera)|(safari)|(android)/i.exec(string.toLowerCase());//resq sera una matriz que contendra las coincidencias encontradas en la cadena segun el patron
        resq = ((resq[0])?resq[0].toLowerCase():null);
        return resq;
      }
      var getNameSO = function(string){
        var resq=/(Win)|(Linux)|(Mac)/i.exec(string.toLowerCase());//resq sera una matriz que contendra las coincidencias encontradas en la cadena segun el patron
        resq = ((resq[0])?resq[0].toLowerCase():null);
        return resq;
      }
      var getNameDevice = function(string){
        var resq = /(Linux)|(Win32)|(iPad)|(iPhone)|(MacIntel)|(iPod)/i.exec(string.toLowerCase());
        resq = ((resq[0])?resq[0].toLowerCase():null);
        return resq;
      }
      return {
        browser:getNameBrowser(userAgent),//[0]
        so:getNameSO(userAgent),//[1]
        device:getNameDevice(platform)//[2]
      };
    }
    var dataStatic = {
                                        browser:dataSO().browser,
                                        so:dataSO().so,
                                        device:dataSO().device
                                      };
    console.log(dataStatic);
    dataStatic.condicionBrowser = (dataStatic.browser=="chrome"||dataStatic.browser=="firefox"||dataStatic.browser=="safari");
    if(dataStatic.condicionBrowser){
      $('.control-menu').tooltip();
      console.log("tooltip activado")
    }
      
    var l = console;
    var izquierda_bajo = $('#izquierda-bajo');
    var menu = $('.menu-p');
    var menu_oculto = $('._menu-p');

        menu_oculto.smint({
          'scrollSpeed':1000
        });
      menu_oculto.slicknav();
      $('.slicknav_menutxt').text("");
        var menu_responsive = $('.slicknav_nav');
        l.log(menu_responsive)
        //menu_responsive.addClass('smint');
        menu_responsive.css({
        "position":"static"
      });
//Efectos del texto de titulo
   $('#texto-slider div:gt(0)').hide();
   setInterval(function(){
     $('#texto-slider div:first-child').fadeOut(0)
        .next('div').fadeIn(750)
        .end().appendTo('#texto-slider');}, 5000);
//Efectos del texto

    
        
//Control del menu responsive
      $('.slicknav_nav > a').on('click',function(event) {
        /*
          this: es el elemento <a> dentro del menu-p
          this.id: es el id del elemento. 
        */
        l.log(this.id);
        $("._menu-p > #"+this.id).trigger('click');
      });
//Control del menu original(grande)
      $('.menu-p > a').on('click',function(event) {
        /*
          this: es el elemento <a> dentro del menu-p
          this.id: es el id del elemento. 
        */
        l.log(this.id);
        $("._menu-p > #"+this.id).trigger('click');
      });
      var list_id = ['centro','nosotros','servicios','clientes','contactanos']
      l.log(menu_responsive.children());
      menu_responsive.children().each(function(i,elem){
        l.log(elem);
        elem.setAttribute('id', list_id[i]);
      })

        var ancho_pantalla = $(window).width();
        var alto_pantalla = $(window).height();
        var pattern = $("#pattern");
        var fondoSlide = $('.backstretch');
        pattern.width(ancho_pantalla);
        pattern.height(fondoSlide.height());
      if(ancho_pantalla<480){
          $('.slicknav_menu').prepend($('#logo'));
      }
      $(window).on('resize',function(){
        l.log("resize")
        var _ancho_pantalla = $(window).width();
        var _alto_pantalla = $(window).height();
        l.log("ancho :"+ _ancho_pantalla);
        pattern.height(_alto_pantalla);
        if(_ancho_pantalla<=480){
          $('.slicknav_menu').prepend($('#logo'));
        }
        else if(_ancho_pantalla>480){
          $('#cuerpo').prepend($('#logo'));
        }
      })
      izquierda_bajo.estado = true;//open
      var iconoBtnControlMenu = $('.control-menu>.glyphicon');
      var btnControlMenu = $('.control-menu');

      btnControlMenu.on('click',function(e){

        var b = $('.control-menu')[0];//cojo al elemento en su forma nativa como javascript
        var margen_izquierdo = izquierda_bajo.width() - 20;
        if(izquierda_bajo.estado){
          izquierda_bajo.animate({
            "left": "-="+margen_izquierdo+"px"},
            900, function() {
            izquierda_bajo.estado = false;
            iconoBtnControlMenu.removeClass('glyphicon-chevron-left');
            iconoBtnControlMenu.addClass('glyphicon-chevron-right');
            izquierda_bajo.css({
              "visibility":"hidden"
            });
            btnControlMenu.css({
              "visibility":"visible"
            });
            if(dataStatic.condicionBrowser){
              b.dataset.originalTitle = "Mostrar menu";
            }
              
          });//izquierda_bajo.css
        }else {
          izquierda_bajo.animate({
              "left": "+="+margen_izquierdo+"px"},
              700, function() {
              izquierda_bajo.estado = true;
              iconoBtnControlMenu.removeClass('glyphicon-chevron-right');
              iconoBtnControlMenu.addClass('glyphicon-chevron-left');
              izquierda_bajo.css({
                "visibility":"visible"
              });
              if(dataStatic.condicionBrowser){
                b.dataset.originalTitle = "Ocultar menu";
              }
            })//function
        }//else 
      });//btnControlMenu.on("click",...)

}(window,jQuery,undefined)


