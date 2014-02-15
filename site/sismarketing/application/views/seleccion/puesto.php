<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

<?php
   // 	   function array_a_url($array) {
   //          $tmp = serialize($array);
   //          $tmp = urlencode($tmp);
   //          return $tmp;
   //      }

	$mi_array = array('nombre' =>'josed2', 'descripcion' =>'puesto2', 'estadoreq' => '01');
	// print_r($mi_array);
	$tmp = serialize($mi_array);
	$tmp = urlencode($tmp);

	echo "<a href=../puestocontrol/guardarPuesto/$tmp> Recargar la Página </a>";
?>

<br>
</body>
</html>