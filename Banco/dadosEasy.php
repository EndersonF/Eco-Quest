
<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=ecoquest";
$usuario = "root";
$senha = "";
try {
	$conexao = new PDO($host, $usuario, $senha);


	$sql = $conexao->prepare('SELECT * FROM quest');

		$sql->execute();

		$dados = "[";

		while($lista = $sql->fetch()){
			if ($dados != "[") {
				$dados .= ",";
			}
			$dados .= '{"codigo": "'.$lista["ID"].'",';
			$dados .= '"texto": "'.$lista["Texto"].'",';
			$dados .= '"dificuldade": "'.$lista["Dificuldade"].'"}';

		}
		$dados .= "]";
		echo $dados;



} catch (Exception $ex) {
	echo "erro ao listar: ". $ex->getMessage();
};
