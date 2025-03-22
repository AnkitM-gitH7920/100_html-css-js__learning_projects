let arrow = document.querySelector('.arrow');
window.addEventListener('scroll',(event)=>{
	let position = window.scrollY;
	if (position<=100) {
		arrow.classList.add('fade-in');
		arrow.classList.remove('fade-out');
	}
	else if (position>110){
		arrow.classList.remove('fade-in');
		arrow.classList.add('fade-out');
	}
});