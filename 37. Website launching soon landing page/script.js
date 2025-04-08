let countDownDate = new Date("Apr 10, 2025 00:00:00").getTime();
let a = setInterval(function(){
	let now = new Date().getTime();
	let timeLeft = countDownDate - now;

	let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	let timeString = `${formatTimeString(days)}:${formatTimeString(hours)}:${formatTimeString(minutes)}:${formatTimeString(seconds)}`;
	document.querySelector(".time span").innerText = timeString;

},1000)

function formatTimeString(unit){
	return unit<10 ? "0" + unit : unit;
}