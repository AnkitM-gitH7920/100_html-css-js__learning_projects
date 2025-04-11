function updateClock(){
	const today = new Date();
	const hour = today.getHours();
	const minutes = today.getMinutes();
	const seconds = today.getSeconds();

	document.getElementById("numH").innerText = `${formatedString(hour)}`;
	document.getElementById("numM").innerText = `${formatedString(minutes)}`;
	document.getElementById("numS").innerText = `${formatedString(seconds)}`;
}
setInterval(()=>{updateClock()},1000)

function formatedString(unit){
	return unit < 10 ? "0" + unit : unit;
}