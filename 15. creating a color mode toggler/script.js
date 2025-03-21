let toggler = document.getElementById('switch');
toggler.addEventListener("click",(event)=>{
	toggler.checked
	? document.body.style.background = "black"
	: document.body.style.background = "white"
})