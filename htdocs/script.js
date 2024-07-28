var endpoint = 'http://localhost/index.php/';
var htmlData = "";
var xhr = new XMLHttpRequest();
xhr.open('GET', endpoint, true);
xhr.send();

xhr.addEventListener('load', loadSelectedData);

function loadSelectedData(e) {
    var contenido = JSON.parse(e.target.responseText).data;
    var holder = document.getElementById("holder");

    for  (let i = 0 ; i < contenido.length ; i++){

        htmlData +=
        "<div>"+
        "<h2>" + "ID: " + JSON.stringify(contenido[i].id) + " " + JSON.stringify(contenido[i].property) + "</h2>" +
        "<p>" + "Available:" + JSON.stringify(contenido[i].available) + " Location:" + JSON.stringify(contenido[i].location) + " Price: " + JSON.stringify(contenido[i].price) + "</p>";
        + "</div>";            
	}
	holder.innerHTML = htmlData;        
}
