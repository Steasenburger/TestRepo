'use strict';
var lool, eingabe, text;

function zahlHalbieren (zahl){
	var ergebnis;
	zahl = parseFloat(zahl);
	ergebnis = Math.sqrt(zahl);
	return ergebnis;
}

eingabe = prompt ('Bitte geben sie eine Zahl ein!', eingabe);

lool = zahlHalbieren(eingabe);
text = ' Die Zahl halbiert = ' + lool;
document.write(text); 

var data= {
	id :"12323",
	fistName: "Hans",
	lastName: "Frans",
	type: "Bestellung",
	items: []
}

data.items =[23,2345];

document.write('<br>' + data.fistName+ ' '+ data.items [0]);
