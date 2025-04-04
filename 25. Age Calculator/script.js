const birthDate = document.querySelector('input[type="date"]');
const btn = document.getElementById("calcBtn");
const ageDisplay = document.getElementById("ageHere");

birthDate.addEventListener("keydown",(event)=>{
	if (event.key == "Enter") {
		if (birthDate.value.trim() === "") {
			alert("Please provide a valid age.");
		}else{
			let age = birthDate.value;
			calcAge(age);
		}
	}
});

btn.addEventListener("click",(event)=>{
	if (birthDate.value.trim() === "") {
		alert("Please provide a valid age.");
	}else{
		let age = birthDate.value;
		calcAge(age);
	}
});
function calcAge(age){
	let currentDate = new Date();
	let [birthYear,birthMonth, birthDay] = age.split("-");
	let [currDay, currMonth, currYear] = [currentDate.getUTCDate(), currentDate.getMonth()+1, currentDate.getFullYear()
	];

	let ageDay, ageMonth, ageYear;
	ageYear = currYear - birthYear;
	
	if (currMonth >= birthMonth) {
		ageMonth = currMonth - birthMonth;
	}else{
		ageMonth--;
		ageMonth = 12 + currMonth - birthMonth;
	}

	if (currDay >= birthDay) {
		ageDay = currDay - birthDay;
	}else{
		ageMonth--;
		ageDay = getDaysInMonth(birthYear, birthMonth) + currDay - birthDay;
	}
	if (ageMonth < 0) {
		ageMonth = 11;
		ageMonth--;
	}
	ageDisplay.innerText = `You are ${ageYear-1} years, ${ageMonth} months and ${ageDay} days old`
}
function getDaysInMonth(year, month){
	return new Date(year, month, 0).getDate();
}