var formUI 			= document.getElementsByTagName( "form" )[ 0 ];
var inputsUI 		= formUI.getElementsByTagName( "input" );
var holder 			= document.getElementById( "holder" );


submit.addEventListener( "click", function( e ) {
	e.preventDefault();
	var dataProperty  	= inputsUI[ 2 ].value; 
	var dataLocation  	= inputsUI[ 3 ].value; 
	var dataPrice 	  	= inputsUI[ 4 ].value; 
	var submit			= inputsUI[ 5 ];
	var endpoint = "http://edc-javascript.dvl.to/";
	var xhr = new XMLHttpRequest();
	xhr.open( "POST", endpoint, true );
	xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xhr.send( "property=" + dataProperty + "&location=" + dataLocation + "&price=" + dataPrice );
	xhr.addEventListener( "load", loadInsertedData );

});

function loadInsertedData( e ) {
	var dataJson = JSON.parse( e.target.responseText );
	formUI.reset();
	holder.innerHTML = dataJson.status;
	setTimeout( function() {
		holder.innerHTML = "";
	}, 3000 );
};






