<?php

/**
 * Clase Conexion
 */
class Conexion extends PDO
{
    function __construct()
    {
        //$DB_HOST = getenv('OPENSHIFT_MYSQL_DB_HOST');
        parent::__construct('mysql:host=localhost;dbname=registroalumnos', 'root', '');
        $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
}
