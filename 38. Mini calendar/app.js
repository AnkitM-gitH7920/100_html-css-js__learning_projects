const monthList = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"];
const daysList = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"];

let today = new Date();

function format(unit){
	return unit < 10 ? "0" + unit : unit;
}

document.getElementById("date").innerText  =  format(today.getDate());
document.getElementById("day").innerText   =  daysList[today.getDay()];
document.getElementById("month").innerText =  monthList[today.getMonth()];
document.getElementById("year").innerText  =  today.getFullYear();