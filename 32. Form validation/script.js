const submitBtn = document.querySelector("input[type='submit']");
const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".inputs");
let mainWarning = document.querySelector(".mainWarning")

// all the field
let nameField = document.getElementById("nameInput");
let phoneField = document.getElementById("mobileInput");
let emailField = document.getElementById("emailInput");
let messageField = document.getElementById("messageInput")
// all the field

submitBtn.addEventListener("click",(event)=>{
	event.preventDefault();
	let [nameResult, phoneResult, emailResult, messageResult] = [nameValidation(), phoneValidation(), emailValidation(), messageValidation()];
	if (!nameResult || !phoneResult || !emailResult || !messageResult) {
		mainWarning.style.display = "block";
	}else{
		mainWarning.style.display = "none";
		document.querySelectorAll(".warningText").forEach((p) => {
			p.innerText = "";
			p.innerHTML = "";
		});
		form.reset();
		alert("Details submitted successfully")
	};
});

function nameValidation(){
	let nameValue = nameField.value;
	let nameWarning = document.querySelector(".nameWarning>p")
	if (nameValue.length == 0) {
		nameWarning.innerText = "Name is required";
		return false;
	}
	if (!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)) {
		nameWarning.innerText = "Enter full name";
		return false;
	}else{
		nameWarning.innerHTML = `<img src="check.png">`;
		return true;
	}
}
function phoneValidation(){
	let phoneValue = phoneField.value;
	let phoneWarning = document.querySelector(".mobileWarning>p");

	if (isNaN(phoneValue)) {
		phoneWarning.innerText = "Alphabets aren't allowed";
		return false;
	}else if (phoneValue.length === 0 || !/^\d{10}$/.test(phoneValue)) {
		phoneWarning.innerText = "Enter atmost 10 digits";
		return false;
	}
	else{
		phoneWarning.innerHTML = `<img src="check.png">`;
		return true;
	};
};
function emailValidation(){
	let emailValue = emailField.value;
	let emailWarning = document.querySelector(".emailWarning>p");
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/.test(emailValue)) {
		emailWarning.innerText = "Invalid email format";
		return false;
	}else{
		emailWarning.innerHTML = `<img src="check.png">`;
		return true;
	};
};
function messageValidation(){
	let messageValue = messageField.value;
	let messageWarning = document.querySelector(".messageWarning>p");
	if (messageValue.length < 30) {
		messageWarning.innerText = "Enter atleast 30 digits";
		return false;
	}else{
		messageWarning.innerHTML = `<img src="check.png">`;
		return true;
	};
};
nameField.addEventListener("input",nameValidation);
phoneField.addEventListener("input",phoneValidation)
emailField.addEventListener("input",emailValidation)
messageField.addEventListener("input",messageValidation)