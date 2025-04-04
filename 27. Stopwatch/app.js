const time = document.getElementById("time");
const playBtn = document.querySelector(".playDiv");
const pauseBtn = document.querySelector(".pauseDiv");
const resetBtn = document.querySelector(".resetDiv");

let timer = null;
let playClicks = 0
let [seconds,minutes,hours] = [0, 0, 0];

function stopWatch(){
	seconds++;
	if (seconds == 60) {
		minutes++;
		seconds = 0;
		if (minutes == 60) {
			hours++;
			minutes = 0;
		}
	}
	time.innerText = `${formatString(hours)}:${formatString(minutes)}:${formatString(seconds)}`
}
function formatString(unit){
	return unit < 10 ? "0" + unit : unit;
}
pauseBtn.addEventListener("click",(event)=>{
	if (event.target.classList.contains("pauseDiv") || event.target.id == "square") {
		playClicks = 0;
		pauseWatch();
	};
});
playBtn.addEventListener("click",(event)=>{
	playClicks++;
	if (playClicks === 1) {
		timer = setInterval(()=>{ stopWatch() },1000);
	}else{
		return;
	};
});
resetBtn.addEventListener("click",(event)=>{
	if (event.target.classList.contains("squareDiv") || event.target.id == "reset") {
		time.innerText = `00:00:00`;
		playClicks = 0;
		seconds = 0;
		minutes = 0;
		hours = 0;
		pauseWatch();
	};
});
function pauseWatch(){
	if (timer!== null) {
		clearInterval(timer)
	}
}