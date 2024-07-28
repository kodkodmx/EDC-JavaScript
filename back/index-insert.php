<?php
header( "Access-Control-Allow-Origin: *" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "js_edc";

$available_data = $_POST[ "available" ];
$property_data 	= $_POST[ "property" ];
$location_data 	= $_POST[ "location" ];
$price_data 	= $_POST[ "price" ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB Connection failed..!" ); }

$query = "INSERT INTO `real-state` VALUES( NULL, $available_data, '$property_data', $location_data, $price_data )";
$query_result = mysqli_query( $conn, $query );

$json_data = [
	"status" => "New record created"
];

echo json_encode( $json_data );
?>