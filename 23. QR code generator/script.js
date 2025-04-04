const btn = document.getElementById("generate");
const input = document.getElementById("input");
let qr = document.getElementById("qr");
const img = document.querySelector(".img");

async function fetchQR(text){
	let data = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`);
	if (data.status == 200) {
		qr.innerHTML = "";
		console.log(data)
		qr.style.height = "150px";
		let dynamicImg = document.createElement("img")
		dynamicImg.classList.add("height")
		qr.appendChild(dynamicImg)
		dynamicImg.src = `${data.url}`;
		input.value = "";		
	}
	else{
		console.log("Cant create qr at the moment")
	}
}
input.addEventListener("keydown",(event)=>{
	let text = input.value;
	if (event.key == "Enter") {
		fetchQR(text);
	};
});
btn.addEventListener("click",()=>{
	let text = input.value;
	fetchQR(text);
});