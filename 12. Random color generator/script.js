const btn = document.querySelector('.btn');
const inputField = document.querySelector('.inputField');
const copybtn = document.querySelector('.bx');

class generate{
	colorGeneratorClass(){
	    const numbers = "1234567890";
		const alphabets = "abcdef";
		const concatedString = numbers + alphabets.toUpperCase();
		let hexcode = "";
		for(let i=0;i<6;i++){
			let random = Math.floor(Math.random()*concatedString.length);
			let code = concatedString[random];
			hexcode += code
		}
		document.documentElement.style.background = `#${hexcode}`
		inputField.value = `#${hexcode}`
	}
	copyToClipboard(){
		navigator.clipboard.writeText(inputField.value
			).then(()=>{
				console.log("Hex Code copied successfully")
			}).catch((err)=>{
				console.log("Error copying the code, please refresh the page.")
			})
	}
}
btn.addEventListener('click',()=>{
	let newClass = new generate();
	newClass.colorGeneratorClass();
})
copybtn.addEventListener('click',()=>{
	let newClass1 = new generate();
	newClass1.copyToClipboard();
})