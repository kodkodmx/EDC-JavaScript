var formUI 			= document.getElementsByTagName( "form" )[ 0 ];
var inputsUI 		= formUI.getElementsByTagName( "input" );
var holder 			= document.getElementById( "holder" );


submit.addEventListener( "click", function( e ) {
	e.preventDefault();
	var dataId  	= 0; 
	var submit			= inputsUI[ 5 ];
	var endpoint = "http://edc-javascript.dvl.to/";
	var xhr = new XMLHttpRequest();
	xhr.open( "POST", endpoint, true );
	xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xhr.send( "id=" + dataId );
	xhr.addEventListener( "load", loadSelectedData );
});

    function loadSelectedData(e) {
        var contenido = JSON.parse(e.target.responseText).data;
        console.log(contenido);
        var holder = document.getElementById("holder");
        var htmlData = "";

        for  (let i = 0 ; i < contenido.length ; i++){
            htmlData +=
            "<div>"+
            "<h2>" + "ID: " + JSON.stringify(contenido[i].id) + " " + JSON.stringify(contenido[i].property) + "</h2>" +
            "<p>" + "Available:" + JSON.stringify(contenido[i].available) + " Location:" + JSON.stringify(contenido[i].location) + " Price: " + JSON.stringify(contenido[i].price) + "</p>";
            + "</div>";            
        }
        holder.innerHTML = htmlData;
        
        setTimeout( function() {
            holder.innerHTML = "";
        }, 3000 );
}