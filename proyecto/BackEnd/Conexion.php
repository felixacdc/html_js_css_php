<?php 

/**
 * Clase Conexion
 */
class Conexion extends PDO
{
    function __construct()
    {
        $DB_HOST = getenv('OPENSHIFT_MYSQL_DB_HOST');
        parent::__construct('mysql:host='. $DB_HOST . ';dbname=registroalumnos', 'adminRaqCSZg', 'XKURDx9dYjNY');
        $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
}