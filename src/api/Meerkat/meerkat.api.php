<?php
// proxy.php

// Configuración de credenciales
$user = "Difeyro1";
$password = "47a545bbced597d7f2666211994c1";
$url = "https://ws.mksmexico.com/Positions/SndCmdExt.php";

// Leer JSON que llega desde JS
$input = json_decode(file_get_contents("php://input"), true);

// Construir el body con lo que venga de JS
$body = json_encode([
    "idCtm" => "551",
    "idTra" => $input["idTra"],
    "idCmd" => $input["idCmd"],
    "idUsr" => "Jornada Digital",
    "idTer" => "PC10",
    "idPgm" => "Monitoreo JD"
]);

// Inicializar cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Basic " . base64_encode("$user:$password")
]);

$response = curl_exec($ch);
$error = curl_error($ch);
curl_close($ch);

// Responder a JS
header("Content-Type: application/json");
if ($error) {
    echo json_encode(["error" => $error]);
} else {
    echo $response;
}
