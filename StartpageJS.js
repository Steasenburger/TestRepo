function potenzieren (a,b){
    var ergebnis = a;
    for (var i =0; i < b; i++){
        ergebnis = ergebnis* a;
    }
    return ergebnis;
}

function outpot (a,b){
    window.alert (potenzieren(a,b));
}

function headmanip(){
    var inhalt = document.getElementById("ueberschrift").value;
    document.getElementById("Headline").innerHTML = inhalt;
    
}
function stylechange(){
    document.body.style.background = "#99ff66";
    var x = document.getElementsByTagName("p");
    for (var i =0; i < x.length; i++){
        window.alert(x[i].innerHTML);
    }
}