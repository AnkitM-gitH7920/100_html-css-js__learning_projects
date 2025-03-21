let indicator = document.getElementById('scroll-indicator');
let thumb = document.getElementById('scroll-thumb');
let scrollheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll',scroll);

function scroll(){
	let scrollTop = document.documentElement.scrollTop;
	let completeScroll = (scrollTop/scrollheight)*100;
	thumb.style.width = `${completeScroll}%`
}

document.querySelector('.scrollButton').addEventListener('click',()=>{
	document.documentElement.scrollTop = 0;
	thumb.style.width = `0px`
})