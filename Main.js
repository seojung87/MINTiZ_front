var comfortable = 0;
var angry = 0;
var happy = 0;
var ncondition="";

function calcondition() {
	if (comfortable>=angry) {
		if(comfortable>=happy) {
			ncondition="편안함"
		}
	}
	else {
		if(angry>=happy) {
			ncondition="화남"
		}
		else {
			ncondition="행복"
		}
	}
}

function plusc()
{
	comfortable += 1
	document.getElementById("comstate").innerHTML="편안함 "+comfortable
	calcondition()
	document.getElementById("condition").innerHTML="현재 상태는 "+ncondition+"입니다."
}
function plusa()
{
	angry += 1
	document.getElementById("angrystate").innerHTML="분노 "+angry
	calcondition()
	document.getElementById("condition").innerHTML="현재 상태는 "+ncondition+"입니다."
}
function plush()
{
	happy += 1
	document.getElementById("happystate").innerHTML="행복 "+happy
	calcondition()
	document.getElementById("condition").innerHTML="현재 상태는 "+ncondition+"입니다."
}

