const passField = document.querySelector("input[type='password']");
const sbBtn = document.querySelector(".png");
const info = document.getElementById("info")


sbBtn.style.cursor = "not-allowed";
passField.addEventListener("input",passValidation)

function passValidation(){
	let password = passField.value;
	let containsSC = /[^a-zA-Z0-9]/.test(password);
	let containsAP = /[A-Z]/.test(password)
	let containsNU = /[0-9]/.test(password)

	passField.classList.remove("redBorder", "yellowBorder", "greenBorder")

	if (containsAP && containsNU && containsSC) {
		sbBtn.style.cursor = "pointer"
		info.innerText = "Password is Strong";
		info.style.color = "green";
		passField.classList.add("greenBorder")
	}else if (containsAP && containsNU) {
		sbBtn.style.cursor = "not-allowed"
		info.innerText = "Password is moderate";
		info.style.color = "yellow";
		passField.classList.add("yellowBorder")
	}else if (containsAP) {
		sbBtn.style.cursor = "not-allowed"
		info.innerText = "Password is weak";
		info.style.color = "red";
		passField.classList.add("redBorder")
	}else{
		info.innerText = ""
	}
}