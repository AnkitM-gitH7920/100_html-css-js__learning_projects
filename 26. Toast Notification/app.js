const buttonsDiv = document.querySelector(".buttons");
const toastBox = document.getElementById("toastBox");

buttonsDiv.addEventListener("click",(event)=>{
	if (event.target.classList.contains("button")) {
		let btnText = event.target.textContent;
		showToastNoti(btnText);
	}
})

function showToastNoti(btnText){
	if (btnText == "Success"){
		createToast("Successfully Submitted","check.png","green")
	}else if (btnText == "Error"){
		createToast("Internet disconnected!!!","close.png","red")
	}else if (btnText == "Invalid"){
		createToast("Email cannot be empty!!!","warning.png","yellow")
	}
}
function createToast(msg,imageURl,colorClass){
	let toast = document.createElement("div")
	toast.classList.add("toast");
	toast.classList.add(colorClass);
	toast.innerHTML = `<img class="imageStyles" src="${imageURl}">
					   <p class="text">${msg}</p>`;
	toastBox.appendChild(toast);
	setTimeout(()=>{ toast.remove() },5000);
}