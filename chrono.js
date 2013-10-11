var time;
var timer;

function start() {
	if(timer != null) {
		clearTimeout(timer);
		timer = null;
	}
	time = new Array(0,0,0);
	update();
}

function cont() {
	if(timer == null) {
		update();
	}
}

function pause() {
	clearTimeout(timer);
	timer = null;
}

function update() {

	var output=new Array();	

	for(var i = 0; i < 3; i++) {
		output.push((time[i] < 10)?"0"+time[i]:time[i]);
	}
	gid("clock").innerHTML = output.join(":");


	
	if(time[2] >= 59) {
		if(time[1] >= 59) {
			if(time[0] >= 99) {
				time = new Array(0, 0, 0);
			} else {
				time = new Array(++time[0], 0, 0);
			}
		} else {
			time[1]++;
			time[2] = 0;
		}
	} else {
		time[2]++;
	}
	
	
	timer = setTimeout("update()", 1000);
}

function gid(id) {
	return document.getElementById(id);
}
