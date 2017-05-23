<?php 

class Conexion() {
	public $db;  
    private static $dns = "mysql:host=localhost;dbname=phpbasico"; 
    private static $user = "user"; 
    private static $pass = "password";     
    private static $instance;

    public function __construct ()  
    {        
       $this->db = new PDO(self::$dns,self::$user,self::$pass);       
    } 

    public static function getInstance()
    { 
        if(!isset(self::$instance)) 
        { 
            $object= __CLASS__; 
            self::$instance = new $object; 
        } 
        return self::$instance; 
    } 
}