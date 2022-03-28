// dichiarazione variabili
var scambio;
var count;
var nodoMinuti;
var nodoFrasi;

function gestoreLoad() {
    try {
        count = 1;
        scambio = true;
        nodoFrasi = document.getElementsByClassName("frasi");
        nodoMinuti = document.getElementsByClassName("minutaggio");
        var a = 1;
        for (var i = 0; i < nodoMinuti.length; i++) {
            nodoMinuti[i].setAttribute('id', [i + "m"]);
            nodoMinuti[i].onmouseover = function(e) {
                gestoreAssocia1(e.target.id);
            }
            nodoMinuti[i].onmouseout = gestoreDecolora1;
        }
    } catch (e) {
        alert("gestoreLoad" + e);
    }
}
function Transformation(){    
  
    SaxonJS.transform({
        stylesheetLocation: "shlomo.sef.json",
        sourceNode: xmlDoc,
        initialTemplate: "main"
    }, "async")
};
//associazione minuti a frasi
function gestoreAssocia(a) {
    try {
        var frase = document.getElementById(a);
        frase.style.backgroundColor = "green";
        for (var i = 0; i < nodoMinuti.length; i++) {
            nodoMinuti[i].setAttribute('id', [i + "a"]);
        }
        var identificatore = a + "a";
        var minuto = document.getElementById(identificatore);
        minuto.style.backgroundColor = "green";
    } catch (e) {
        alert("gestoreAssocia" + e);
    }
}
//associazione frasi a minuti
function gestoreAssocia1(a) {
    try {
        var minuto = document.getElementById(a);
        minuto.style.backgroundColor = "green";
        for (var i = 0; i < nodoFrasi.length; i++) {
            nodoFrasi[i].setAttribute('id', [i]);
        }
        len = a.length;
        // dal parametro a, composto da uno o più numeri e una o più lettere, tolgo le lettere tramite substring
        identificatore = a.substring(0, len - 1);
        var frase = document.getElementById(identificatore);
        frase.style.backgroundColor = "green";
    } catch (e) {
        alert("gestoreAssocia" + e);
    }
}
//De evidenza dopo che si toglie il mouse dai minuti
function gestoreDecolora1() {
    try {
        for (var i = 0; i < nodoMinuti.length; i++) {
            nodoMinuti[i].style.backgroundColor = "#dbccac";
            nodoFrasi[i].style.backgroundColor = "#dbccac";
        }
    } catch (e) {
        alert("gestoreDecolora" + e);
    }
}

window.onload = gestoreLoad;