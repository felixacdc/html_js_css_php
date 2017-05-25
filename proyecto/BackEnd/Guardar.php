<?php

$nombres = $_POST["nombres"]; 
$apellidos = $_POST["apellidos"];

$respuesta = ["nombre" => $nombres , "apellidos" => $apellidos];
echo json_encode($respuesta);