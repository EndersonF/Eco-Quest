<?php
header('Access-Control-Allow-Origin: *');
header("Acess-Control-Allow-Credencials: true");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, X-Requested-With, enctype, Content-Description");
header("Content-Type: application/json; charset=utf-8");
// $host = "mysql:host=127.0.0.1;dbname=ecoquest";
// $usuario = "root";
// $senha = "";
define('DB_NAME', 'ecoquest');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');


try {
	// $conexao = new PDO($host, $usuario, $senha);

	$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);


	

	
	// $sql = $conexao->prepare('UPDATE user set nivel = nivel +1 where ID =1');
	// $sql->execute();
	   
 // if($sql) $result = json_encode(array('success'=>true, 'result'=>'success'));
 //    else $result = json_encode(array('success'=>false,  'result'=>'error'));


	//     echo $result;
	 $query = mysqli_query($mysqli, 'UPDATE user set nivel = nivel +1 where ID =1');

	    $idcust = mysqli_insert_id($mysqli);

	   if($query){
	   	$result = json_encode(array('success'=>"true", 'result'=>'success'));
	   }
	    
	   else {$result = json_encode(array('success'=>"false",  'result'=>'error'));}

	 echo $result;

} catch (Exception $ex) {
	echo "erro ao listar: ". $ex->getMessage();
};


