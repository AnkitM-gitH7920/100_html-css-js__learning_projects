const languageBtn = document.getElementById("languageSelect");
const dropdown = document.querySelector(".dropdown-options");


const api = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd`;
async function getData(){
	const data = await fetch(api);
	const response = await data.json();
	console.log(response)
	document.getElementById("live-C").innerText = `$${response.bitcoin.usd}`
	document.getElementById("live-E").innerText = `$${response.ethereum.usd}`
	document.getElementById("live-D").innerText = `$${response.dogecoin.usd}`
}
document.addEventListener("DOMContentLoaded",(event)=>{
	getData();
})
// animations
languageBtn.addEventListener("click",()=>{
	dropdown.classList.toggle("dropdown-open")
});
dropdown.addEventListener("click",(event)=>{
	if (event.target.nodeName === "SPAN") {
		languageBtn.innerText = event.target.innerText;
		if (dropdown.classList.contains("dropdown-open")) {
			dropdown.classList.remove("dropdown-open")
		};
	};
});
// animations