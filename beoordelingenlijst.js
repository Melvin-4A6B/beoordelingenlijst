//Goed om functie met paramater te gebruiken
//Code is duidelijk
//Var en functie namen beter defineren

function calculate(i) {
	var i = '';
	if(i >= 0 && i <= 49) {
		i = 'onvoldoende';
	} else if(i >= 50 && i <= 59) {
		i = 'matig';
	} else if(i >= 60 && i <= 74) {
		i = 'voldoende';
	} else if(i >= 75 && i <= 100) {
		i = 'goed';
	} else {
		i = 'NaN';
	}
	return i;
}

function result() {
	var cijfer = document.getElementById('cijfer').value;
	document.getElementById('resultaat').innerHTML += '<br>Het cijfer is ' + cijfer + ' en is dus ' + calculate(cijfer);
}

function resultaat() {
	var cijfer = document.getElementById('cijfers').value;
	document.getElementById('resultaat').innerHTML += '<br>De beoordeling is ' + calculate(cijfer) + ', want het cijfer is ' + cijfer;
}