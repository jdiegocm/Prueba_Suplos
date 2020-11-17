<?php
    include('conexion.php'); 

    $sel= mysqli_query($conectar, "select * from info ");
    
    foreach ($sel as $row) {
        $direccion= $row['Direcccion']
        $ciudad= $row['Ciudad'];
        $tel= $row['Telefono'];
        $codigo_postal= $row['Codigo_postal']
        $tipo= $row['Tipo'];
        $precio= $row['Precio'];
        
    }
    echo $direccion;
    echo $ciudad;
    echo $tel;
    echo $codigo_postal;
    echo $tipo;
    echo $precio;
    if($sel){
        echo "Traido";
    }else{
        echo "No Traido";
    }
?>