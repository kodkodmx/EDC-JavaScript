var meses = {1:"Enero", 2:"Febrero", 3:"Marzo", 4:"Abril", 5:"Mayo", 6:"Junio", 7:"Julio", 8:"Agosto", 9:"Septiembre", 10:"Octubre", 11:"Noviembre", 12:"Diciembre"}
var meses2 = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio","Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"]

function equivale (num) {
    console.log(meses[num]);
}

equivale(1);
equivale(12);

console.log("")


var equivale2 = (n) => console.log(meses2[n-1]);

equivale2(1);
equivale2(12);

