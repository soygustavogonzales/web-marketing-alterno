;!function(){
    var l = console;
    var dataSO = function(){

      var userAgent=navigator.userAgent;//devuelve una cadena con el nombre del navegador ,version, sistema operativo (nombre generico) del usuario,motor del navegador.
      var platform = navigator.platform;
      var getNameBrowser = function(string){
        var resq=/(msie)|(firefox)|(chrome)|(opera)|(safari)|(android)/ig.exec(string.toLowerCase());//resq sera una matriz que contendra las coincidencias encontradas en la cadena segun el patron
        resq = (resq?((resq[0])?resq[0].toLowerCase():null):null);
        return resq;
      }
      var getNameSO = function(string){
        var resq=/(Win)|(Linux)|(Mac)/ig.exec(string.toLowerCase());//resq sera una matriz que contendra las coincidencias encontradas en la cadena segun el patron
        resq = (resq?((resq[0])?resq[0].toLowerCase():null):null);
        return resq;
      }
      var getNameDevice = function(string){
        var resq = /(Linux)|(Win32)|(iPad)|(iPhone)|(MacIntel)|(iPod)/ig.exec(string.toLowerCase());
        resq = (resq?((resq[0])?resq[0].toLowerCase():null):null);
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
    var getVersionImage = function(data){
      data = data || {
        ruta :"/public/images/servicios/fondos/",//ruta de las imagenes
        cantidad:"",//numero de imagenes
        medida:"",//en blanco
        extension:"jpg"//extension por default de las imagenes
      }
      var lista = [];
      while(data.cantidad--){
        lista.push(data.ruta+(data.cantidad+1)+(data.medida?".":"")+data.medida+"."+data.extension);
      }
      return lista;
    }
    var isPC = (dataStatic.so == "win"||dataStatic.so == "linux"||dataStatic.so == "mac");
    var setBackground = function(esPC){
      switch(true){
        case(esPC)://si es PC
           $.backstretch(getVersionImage({
            ruta:"/public/images/servicios/fondos/",
            cantidad:5,//cantidad de imagenes
            medida:"",//version original
            extension:"jpg"
           }), {
              fade: 750,
              duration: 4000
          });
           l.log("es PC")
        break;
        case(!esPC)://es movil
          $.backstretch(getVersionImage({
            ruta:"/public/images/servicios/fondos/",
            cantidad:5,//cantidad de imagenes
            medida:"680x453",//version original
            extension:"jpg"
           }), {
              fade: 750,
              duration: 4000
          });
          l.log("es MOVIL")
        break;
        default:
          l.log("alta probabilidad de que sea PC");
      }
    }
    setBackground(isPC);
  var centro = $('.centro');
  var fondoSlide = $('.backstretch');
  centro.append(fondoSlide);
    dataStatic.condicionBrowser = (dataStatic.browser=="chrome"||dataStatic.browser=="firefox"||dataStatic.browser=="safari");
    if(dataStatic.condicionBrowser){
      $('.control-menu').tooltip();
      console.log("tooltip activado")
    }
      
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

      var logo = $('#logo');
      logo.ubicacion = "pc";
      if(ancho_pantalla<480){
          $('.slicknav_menu').prepend(logo);
          logo.ubicacion = "movil";
      }
      /*Cada vez que se resetea el ancho del navegador*/
      $(window).on('resize',function(){
        //l.log("resize")
        var _ancho_pantalla = $(window).width();
        var _alto_pantalla = $(window).height();
        if(logo.ubicacion=="pc"&&_ancho_pantalla<=480){
          $('.slicknav_menu').prepend(logo);
          logo.ubicacion = "movil";
          l.log("ancho :"+ _ancho_pantalla+ " version movil");
        }
        else if(logo.ubicacion=="movil"&&_ancho_pantalla>480){
          $('#cuerpo').prepend(logo);
          logo.ubicacion = "pc";
          l.log("ancho :"+ _ancho_pantalla+ " version pc");
        }
      })
      /*Cada vez que se resetea el ancho del navegador*/
      
      izquierda_bajo.estado = true;//open
      var iconoBtnControlMenu = $('.control-menu>.fa');
      var btnControlMenu = $('.control-menu');

      btnControlMenu.on('click',function(e){
        var b = $('.control-menu')[0];//cojo al elemento en su forma nativa como javascript
        var margen_izquierdo = izquierda_bajo.width() - 20;
        if(izquierda_bajo.estado){
          izquierda_bajo.animate({
            "left": "-="+margen_izquierdo+"px"},
            900, function() {
            izquierda_bajo.estado = false;
            iconoBtnControlMenu.removeClass('fa-chevron-left');
            iconoBtnControlMenu.addClass('fa-chevron-right');
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
              iconoBtnControlMenu.removeClass('fa-chevron-right');
              iconoBtnControlMenu.addClass('fa-chevron-left');
              izquierda_bajo.css({
                "visibility":"visible"
              });
              if(dataStatic.condicionBrowser){
                b.dataset.originalTitle = "Ocultar menu";
              }
            })//function
        }//else 
      });//btnControlMenu.on("click",...)
  
/*SECCION CONTACTANOS*/
  $("#formID").validationEngine('attach',{
    onValidationComplete : function(form,status){
      l.log(form + " : " + status);
      if(status){
        enviar();
        //l.log($(this).contents());
      }
    }
  });

var enviar = function(){

  var name = $("#formID .name").val(),
  email = $("#formID .email").val(),
  telefono = $("#formID .telefono").val(),
  message = $("#formID .message").val(),
  modalMessage = $("#Message"),
  data = {
    nombre:name,
    email:email,
    telefono:telefono,
    mensaje:message,
  };
  l.log(data)
  //reset.trigger('click');
  modalMessage.modal('show');
  $.ajax({
    url: '/public/php/contacto.php',
    type: 'POST',
    dataType: 'json',
    data: {query:data}
  })
  .done(function(estado) {//estado es la respuesta
    if(estado=="true"){
      modalMessage.modal('show');
      l.log("msj. enviado, se mostro el modal!!");
    }else{
      l.log("error al enviar");
    }
  });

}//function enviar()
/****SECCION CONTACTANOS*/

}(window,jQuery,undefined)
