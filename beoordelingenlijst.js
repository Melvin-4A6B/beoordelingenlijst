//Goed om functie met paramater te gebruiken
//Code is duidelijk
//Var en functie namen beter defineren

function calculate(i) {
	var a = '';
	if(i >= 0 && i <= 49) {
		a = 'onvoldoende';
	} else if(i >= 50 && i <= 59) {
		a = 'matig';
	} else if(i >= 60 && i <= 74) {
		a = 'voldoende';
	} else if(i >= 75 && i <= 100) {
		a = 'goed';
	} else {
		a = 'NaN';
	}
	return a;
}

function result() {
	var cijfer = document.getElementById('cijfer').value;
	document.getElementById('resultaat').innerHTML += '<br>Het cijfer is ' + cijfer + ' en is dus ' + calculate(cijfer);
}

function resultaat() {
	var cijfer = document.getElementById('cijfers').value;
	document.getElementById('resultaat').innerHTML += '<br>De beoordeling is ' + calculate(cijfer) + ', want het cijfer is ' + cijfer;
}