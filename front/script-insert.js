var endpoint = 'http://localhost:80/index-insert.php';
var htmlData = "";
var xhr = new XMLHttpRequest();
xhr.open('GET', endpoint, true);
xhr.send();

xhr.addEventListener(SubmitEvent, insertData);

function insertData() {
    var endpoint = 'http://localhost:80/index-insert.php';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({
        property: document.getElementById("property").value,
        available: document.getElementById("available").value,
        location: document.getElementById("location").value,
        price: document.getElementById("price").value
    }));
    xhr.addEventListener('load', function(e) {
        var contenido = JSON.parse(e.target.responseText);
        var holder = document.getElementById("holder");
        holder.innerHTML = "<h2>" + contenido.message + "</h2>";
    });
}