const grayBack = document.querySelector('.grayBackground');
const redBack = document.querySelector('.redBackground');

grayBack.addEventListener('click',addClass);
function addClass(){
	redBack.classList.add('animation');
	grayBack.classList.add('fill-color')
}

redBack.addEventListener('click',removeClass);
function removeClass(){
	redBack.classList.remove('animation');
	grayBack.classList.remove('fill-color')
}