<?php
    include('conexion.php');
    $tipo_t = 1;
    $direccion = $_POST['direccion'];
    $ciudad = $_POST['ciudad'];
    $telefono = $_POST['telefono'];
    $codigo_postal = $_POST['codigo_postal'];
    $tipo = $_POST['tipo'];
    $precio = $_POST['precio'];

    //$dire = $ciudad." ".$direccion;


        $query_1 = mysqli_prepare($conectar, "INSERT INTO info(tipo_t, Direccion, Ciudad, Tel,Codigo_postal, Tipo, Precio) VALUES (?,?,?,?,?,?,?)");
        mysqli_stmt_bind_param($query_1, 'issssss', $tipo_t, $direccion, $ciudad, $telefono, $codigo_postal, $tipo, $precio);
        mysqli_stmt_execute($query_1);

            if($query_1){
                echo "insertado";
            }else{
                echo "No insertado";
            }

?>