<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db_host = "127.0.0.1";
$db_user = "root";
$db_pass = "";
$db_name = "js_edc";


$property_id    = isset($_POST["id"]) ? $_POST["id"] : null;
$property_data  = isset($_POST["property"]) ? $_POST["property"] : null;
$location_data  = isset($_POST["location"]) ? $_POST["location"] : null;
$price_data     = isset($_POST["price"]) ? $_POST["price"] : null;

if (is_null($property_id)) {
    die(json_encode(["error" => "All fields are required, awaiting for data. Update"]));
}

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$conn) {
    die("DB Connection failed: " . mysqli_connect_error());
}

// Usando comillas simples para las cadenas de texto y comillas invertidas para el nombre de la tabla
$query = "UPDATE `real_state` SET property='$property_data', location=$location_data, price=$price_data WHERE id=$property_id";
$query_result = mysqli_query($conn, $query);

if (!$query_result) {
    die(json_encode(["error" => "SQL Error: " . mysqli_error($conn)]));
}

$json_data = [
    "status" => "Record updated"
];

echo json_encode($json_data);

mysqli_close($conn);
?>
