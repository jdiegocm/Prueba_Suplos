<?php
include('conexion.php');


    $query = mysqli_prepare($conectar, "SELECT Direccion, Ciudad, Tel,Codigo_postal, Tipo, Precio  FROM info WHERE tipo_t = 1 ");
    mysqli_stmt_execute($query);
    mysqli_stmt_store_result($query);
    mysqli_stmt_bind_result($query, $direccion, $ciudad, $telefono, $codigo_postal, $tipo, $precio);

    $json = array();
    while($row = mysqli_stmt_fetch($query)){
        $json[] = array(
            'direccion'=>$direccion,
            'ciudad'=>$ciudad,
            'telefono'=>$telefono,
            'codigo_postal'=>$codigo_postal,
            'tipo'=>$tipo,
            'precio'=>$precio                
        );
    }

    $convert = json_encode($json);
    echo $convert;


?>