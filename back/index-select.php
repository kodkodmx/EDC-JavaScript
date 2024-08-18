<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db_host = "127.0.0.1";
$db_user = "root";
$db_pass = "";
$db_name = "js_edc";

$property_id = isset($_POST["id"]) ? $_POST["id"] : null;

if (is_null($property_id)) {
    die(json_encode(["error" => "All fields are required, awaiting for data. Select"]));
}

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB Connection failed..!" ); }

$query = "SELECT * FROM `real_state` WHERE id = '$property_id'";
$query_result = mysqli_query( $conn, $query );
$all_records = [];

while( $record = mysqli_fetch_assoc( $query_result ) ) {
	array_push( $all_records, $record );
}

$json_data = [
	"info" => "php data",
	"data" => $all_records
];

echo json_encode( $json_data );
?>