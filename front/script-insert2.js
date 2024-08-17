var formUI = document.getElementsByTagName( "form" )[ 0 ];
var inputsUI = formUI.getElementsByTagName( "input" );
var inputId 	   = inputsUI[ 0 ]; 
var inputAvailable = inputsUI[ 1 ]; 
var inputProperty  = inputsUI[ 2 ].value; 
var inputLocation  = inputsUI[ 3 ].value; 
var inputPrice 	   = inputsUI[ 4 ].value; 
var inputSubmit	   = inputsUI[ 5 ];

var dataProperty = inputProperty;
var dataLocation = inputLocation;
var dataPrice = inputPrice;
var dataSubmit = inputSubmit;


dataSubmit.addEventListener( "click", function( e ) {
	e.preventDefault();
	console.log( dataSubmit.click );
	console.log( dataSubmit.value );
	console.log( inputsUI[3].value );
	console.log( inputsUI[4].value );



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

});

function dataDOMInsert( arrayData ) {
} 






