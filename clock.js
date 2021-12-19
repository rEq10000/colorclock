setInterval(displayClock, 500);
function displayClock () {
	var time = new Date();
	var yy = time.getFullYear();
	var mo = new Array(12);
	var da = time.getDate();
	var hh = time.getHours();
	var mi = time.getMinutes();
	var se = time.getSeconds();
	if (hh < 10) {
		hh = '0' + hh;
	}
		
	if (mi < 10) {
		mi = '0' + mi;
	}
		
	if (se < 10) {
		se = '0' + se;
	}

	if (da < 10) {
		da = '0' + da;
	}

	mo[0] = "01";
	mo[1] = "02";
	mo[2] = "03";
	mo[3] = "04";
	mo[4] = "05";
	mo[5] = "06";
	mo[6] = "07";
	mo[7] = "08";
	mo[8] = "09";
	mo[9] = "10";
	mo[10] = "11";
	mo[11] = "12";

	var n = mo[time.getMonth()];
	var year = yy.toString().substr(-2);

	document.getElementById('time').innerHTML = "#"+ hh + mi + se;
	document.getElementById('date').innerHTML = "#"+ year + n + da;

	document.getElementById("timebox").style = "background-color: " + document.getElementById("time").innerHTML + ";";
	document.getElementById("datebox").style = "background-color: " + document.getElementById("date").innerHTML + ";";
	}