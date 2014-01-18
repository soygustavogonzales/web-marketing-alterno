<?php

    if(isset($_POST)){
         if(isset($_POST['query'])){//se trata de un JSON
             $query = $_POST['query'];//JSON en formato cadena 
             $para    = 'jatachagua@marketing-alterno.com';
             $asunto  = 'Consulta a Marketing';
             
             $nombre   = $query['nombre'];
             $telefono = $query['telefono'];
             $emailde = $query['email'];
             $mensaje = '<h3>'.$query['mensaje'].'<br/> teléfono: '.$query['telefono'].'</h3>';
             $estado = Enviar_Correo($emailde, $nombre, $para, $asunto, $mensaje);
             echo $estado;

        }
    }

function Enviar_Correo($de, $name, $para, $asunto, $mensaje){

      // Para enviar un correo HTML mail, la cabecera Content-type debe fijarse
      $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
      $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

      $cabeceras .= 'From: '.$name.' <'.$de.'>'."\r\n";

      // Mail it
      mail($para, $asunto, $mensaje, $cabeceras);
      return 'true';
}

?>