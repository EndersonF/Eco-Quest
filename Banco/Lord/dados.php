<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header("Acess-Control-Allow-Credencials: true");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, X-Requested-With, enctype, Content-Description");
header("Content-Type: application/json; charset=utf-8");
$host = "mysql:host=127.0.0.1;dbname=ecoquest";
$usuario = "root";
$senha = "";
try {
	$conexao = new PDO($host, $usuario, $senha);


	$sql = $conexao->prepare('SELECT * FROM `user`');

		$sql->execute();

		$dados = "[";

		while($lista = $sql->fetch()){
			if ($dados != "[") {
				$dados .= ",";
			}
			$dados .= '{"codigo": "'.$lista["ID"].'",';
			$dados .= '"nome": "'.$lista["Usuario"].'",';
			$dados .= '"email": "'.md5($lista["email"]).'",';
			if($lista["nivel"] == 0){
				$dados .= '"nomeNivel": "'."Noob Extremo".'",';
			}elseif($lista["nivel"] < 3  ){
					$dados .= '"nomeNivel": "'."Ecologista Iniciante".'",';
			}elseif($lista["nivel"] < 6){
				$dados .= '"nomeNivel": "'."Ambientalista de Carteirinha".'",';
			}elseif($lista["nivel"] < 12){
				$dados .= '"nomeNivel": "'."Mestre da Ecologia".'",';
			}elseif($lista["nivel"] < 18 ){
				$dados .= '"nomeNivel": "'."Lider de ONG ambiental".'",';
			}elseif($lista["nivel"] < 23){
				$dados .= '"nomeNivel": "'."Capitão Planeta".'",';
			}elseif($lista["nivel"] < 26 ){
				$dados .= '"nomeNivel": "'."StarLord Ecologico".'",';
			}elseif($lista["nivel"] < 32 ){
				$dados .= '"nomeNivel": "'."Super Ambientalista".'",';
			}elseif($lista["nivel"] > 32 ){
				$dados .= '"nomeNivel": "'."He-Man Ambientalista".'",';
			}
			$dados .= '"nivel": "'.$lista["nivel"].'"}';

		}
		$dados .= "]";
		echo $dados;



} catch (Exception $ex) {
	echo "erro ao listar: ". $ex->getMessage();
};


