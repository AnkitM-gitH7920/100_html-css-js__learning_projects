let arrow = document.querySelector('.arrow');
window.addEventListener('scroll',(event)=>{
	let position = window.scrollY;
	if (position<=100) {
		arrow.classList.toggle('fade-in')
	}
	else{
		arrow.classList.toggle('fade-out')
	}
});