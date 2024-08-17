var formUI = document.getElementsByTagName( "form" )[ 0 ];
var inputsUI = formUI.getElementsByTagName( "input" );
/*var inputId 	   = inputsUI[ 0 ]; 
var inputAvailable = inputsUI[ 1 ]; 
var inputProperty  = inputsUI[ 2 ]; 
var inputLocation  = inputsUI[ 3 ]; 
var inputPrice 	   = inputsUI[ 4 ]; 
var inputSubmit	   = inputsUI[ 5 ];*/ 

var dataProperty = inputsUI[2].value;
var dataLocation = inputsUI[3].value;
var dataPrice = inputsUI[4].value;
var dataSubmit = inputsUI[5];


dataSubmit.addEventListener( "click", function( e ) {
	e.preventDefault();
	console.log( dataSubmit.click );
	//console.log( dataSubmit.value );
	//console.log( inputLocation.value );
	//console.log( inputPrice.value );
});


var holder = document.getElementById( "holder" );
var endpoint = "http://edc-javascript.dvl.to/";
// var htmlData = "";
var xhr = new XMLHttpRequest();
xhr.open( "POST", endpoint, true );
xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
xhr.send( "property=" + dataProperty + "&location=" + dataLocation + "&price=" + dataPrice );
xhr.addEventListener( "load", loadInsertedData );

function loadInsertedData( e ) {
	var dataJson = JSON.parse( e.target.responseText );
	// dataDOMInsert( dataJson );
	console.log( dataJson );
}

function dataDOMInsert( arrayData ) {
} 






