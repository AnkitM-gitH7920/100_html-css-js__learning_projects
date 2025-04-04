const buttonsDiv = document.querySelector(".buttons");
const toastBox = document.getElementById("toastBox");

buttonsDiv.addEventListener("click",(event)=>{
	if (event.target.classList.contains("button")) {
		let btnText = event.target.textContent;
		showToastNoti(btnText);
	}
})
function showToastNoti(btnText){
	let toast = document.createElement("div");
	toast.classList.add("toast");
	if (btnText == "Success"){
		toast.classList.add("green");
		toast.innerHTML = `<img class="imageStyles" src="check.png">
						   <p class="text">Successfully Submitted</p>`;
	}else if (btnText == "Error"){
		toast.classList.add("red");
		toast.innerHTML = `<img class="imageStyles" src="close.png">
						   <p class="text">Unexpected error occcured</p>`;
	}else if (btnText == "Invalid"){
		toast.classList.add("yellow");
		toast.innerHTML = `<img class="imageStyles" src="warning.png">
						   <p class="text">Invalid input, try again!!!</p>`;
	}
	toastBox.appendChild(toast)
	setTimeout(()=>{ toast.remove() },5000)
}