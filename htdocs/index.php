<?php
header( "Access-Control-Allow-Origin: *" );

$db_host = "localhost:3306";
$db_user = "root";
$db_pass = "";
$db_name = "js_edc";

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB Connection failed..!" ); }

$query = "SELECT * FROM `real-state`";
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