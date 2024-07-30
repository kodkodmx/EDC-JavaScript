document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var endpoint = 'http://edc-javascript.dvl.to/';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var formData = new FormData(this);
    var data = new URLSearchParams();

    for (var pair of formData.entries()) {
        if (pair[0] === 'available') {
            data.append('available', formData.get('available') ? 1 : 0);
        } else {
            data.append(pair[0], pair[1]);
        }
    }

    if (!formData.has('available')) {
        data.append('available', 0);
    }

    xhr.send(data.toString());

    xhr.addEventListener('load', function(e) {
        if (xhr.status >= 200 && xhr.status < 300) {
            var contenido = JSON.parse(e.target.responseText);
            var holder = document.getElementById("holder");
            holder.innerHTML = "<h2>" + contenido.status + "</h2>";
        } else {
            var holder = document.getElementById("holder");
            holder.innerHTML = "<h2>Error: " + xhr.statusText + "</h2>";
        }
    });

    xhr.addEventListener('error', function(e) {
        var holder = document.getElementById("holder");
        holder.innerHTML = "<h2>Error: " + e.target.statusText + "</h2>";
    });
});
