function Subtraktion(){
    var Eingabe = document.getElementById('Eingabe');
    var Eingabe2 = document.getElementById('Eingabe2');
    var Ergebnis = Eingabe.value - Eingabe2.value;
    alert (Eingabe.value + " - " +  Eingabe2.value + " = " + Ergebnis);
    Eingabe.value = 0;
    Eingabe2.value = 0;
}
function Addition(){
    var Eingabe = document.getElementById('Eingabe');
    var Eingabe2 = document.getElementById('Eingabe2');
    Eingabe = parseInt(Eingabe.Value); Eingabe2 = parseInt(Eingabe2.value);
    if (Eingabe2 == 0){
        s = 'Addition mit 0';
        console.log(s);
        return;
    }
    var Ergebnis = parseInt(Eingabe.value) + parseInt(Eingabe2.value);
    alert (Eingabe.value + " + " +  Eingabe2.value + " = " + Ergebnis);
    Eingabe.value = 0;
    Eingabe2.value = 0;

}


var los  = document.getElementById('losSubtraktion');
los.addEventListener ('click', Subtraktion, true);

var los2  = document.getElementById('losAddition');
los2.addEventListener ('click', Addition , true);
