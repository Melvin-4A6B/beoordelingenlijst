function result() {
	var cijfer = document.getElementById('cijfer').value;

	if(cijfer >= 0 && cijfer <= 49) {
		document.getElementById('resultaat').innerHTML = 'Het cijfer is ' + cijfer + ' en is dus onvoldoende';
	} else if(cijfer >= 50 && cijfer <= 59) {
		document.getElementById('resultaat').innerHTML = 'Het cijfer is ' + cijfer + ' en is dus matig';
	} else if(cijfer >= 60 && cijfer <= 74) {
		document.getElementById('resultaat').innerHTML = 'Het cijfer is ' + cijfer + ' en is dus voldoende';
	} else if(cijfer >= 75 && cijfer <= 100) {
		document.getElementById('resultaat').innerHTML = 'Het cijfer is ' + cijfer + ' en is dus goed';
	} else {
		document.getElementById('resultaat').innerHTML = cijfer + ' bestaat niet';
	}
}