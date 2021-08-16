function addPostscriptTag() {
	var key = basetags.value;
	
	if(key==="postscript") {
		document.getElementById("postscript-tag").style.display="inline-block";
	}
	else {
		document.getElementById("postscript-tag").style.display="none";
	}
}
