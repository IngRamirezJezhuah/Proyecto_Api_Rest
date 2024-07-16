<?php 

$server = "localhost"; // El servidor que utilizaremos, en este caso será el localhost 
$user = "root"; // El usuario que acabamos de crear en la base de datos 
$pass = ""; // La contraseña del usuario que utilizaremos 
$BD = "control_escolar"; // El nombre de la base de datos 

/* 
Aquí abrimos la conexión en el servidor. Normalmente se envian 3 parametros (los datos del servidor, usuario y contraseña) a la función mysql_connect, si no hay ningún error la conexión será un éxito El @ que se ponde delante de la funcion, es para que no muestre el error al momento de ejecutarse, ya crearemos un código para eso
*/

$conexion = new mysqli ($server, $user, $pass, $BD); 

/* 
Aquí preguntamos si la conexión no pudo realizarse, de ser así lanza un mensaje en la pantalla con el siguiente texto "No pudo conectarse:" y le agrega el error ocurrido con "mysql_error()" 
*/

if ($conexion->connect_errno) {
    die("Error de coneccion" . $conexion->connect_errno);
}else{
    echo "Conectado";
}

/* 
En esta linea seleccionaremos la BD con la que trabajaremos y le pasaremos como referencia la conexión al servidor. Para saber si se conecto o no a la BD podríamos utilizar el IF de la misma forma que la utilizamos al momento de conectar al servidor, pero usaremos otra forma de comprobar eso usando die(). 
*/

?>