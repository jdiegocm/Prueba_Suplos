<?php 

	$server = 'localhost';
	$usuario = 'root';
	$password = '1234';
	$db = 'intelcost_bienes';
    
  
		$conectar = mysqli_connect($server, $usuario, $password, $db);

		if($conectar){
            //echo "conectados";
           
    
		}else{
		echo "No conectado";
		}

?>