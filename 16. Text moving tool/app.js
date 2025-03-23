const successText = document.querySelector('.copyText p');
const copyBtn     = document.getElementById('copy');
const copyField   = document.getElementById('copyInputField');
const moveBtn     = document.getElementById('move');
const moveField   = document.getElementById('moveInputField');

copyBtn.addEventListener('click',(event)=>{
	if (copyField.value == "") {
		alert('Empty field cant be copied')
	}
	else{
		navigator.clipboard.writeText(copyField.value);
		let blockTimer = setTimeout(()=>{
			successText.style.display = "block"
		},100)
	    let clearTimer = setTimeout(()=>{
	    	successText.style.display = "none";
	    	clearTimeout(blockTimer);
	    },2000);
	};
});
moveBtn.addEventListener('click',(event)=>{
	if (copyField.value == "") {
		alert('Empty field cant be moved');
	}
	else{
		moveField.value = copyField.value;
	}
});