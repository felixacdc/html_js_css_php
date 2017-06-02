<?php
	include_once "Conexion.php"; 

	$nombres = $_POST["nombres"]; 
	$apellidos = $_POST["apellidos"];
	$edad = $_POST["edad"]; 
	$telefono = $_POST["telefono"];
	$grados = $_POST["grados"];

	$query = "INSERT INTO alumnos (nombres, apellidos, edad, telefono, grado) VALUES (:nombres, :apellidos, :edad, :telefono, :grados)"; 
	try 
	{
		$conexion = new Conexion();
	    $comando = $conexion->prepare($query); 
	    $rows = $comando->execute(array(':nombres' => $nombres, ':apellidos' => $apellidos, ':edad' => $edad, ':telefono' => $telefono, ':grados' => $grados)); 

	    if( $rows == 1 )
	    	echo json_encode(array("respuesta" => "Se registro el alumno correctamente.", "status" => true));

	} 
	catch(PDOException $e) 
	{ 
	    echo json_encode(array("respuesta" => "ERROR: " . $e->getMessage(), "status" => false)); 
	}