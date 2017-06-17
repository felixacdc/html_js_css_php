<?php

  include_once "Conexion.php";

  $query = "SELECT * FROM alumnos";

  try {
    $conexion = new Conexion();

    $arrayResponse;
    $index = 0;
    foreach ($conexion->query($query) as $row) {
       $arrayResponse[$index] = [
         "nombres" => $row["nombres"],
         "apellidos" => $row["apellidos"],
         "edad" => $row["edad"],
         "telefono" => $row["telefono"],
         "grado" => $row["grado"]
       ];

       $index++;
    }

    echo json_encode(array("respuesta" => $arrayResponse, "status" => true));
  } catch (Exception $e) {
    echo json_encode(array("respuesta" => "ERROR: " . $e->getMessage(), "status" => false));
  }
