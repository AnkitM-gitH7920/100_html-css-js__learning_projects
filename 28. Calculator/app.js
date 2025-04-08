const display = document.getElementById("calcDisplay");
const buttonContainer = document.querySelector(".buttons");

let equation = "";

buttonContainer.addEventListener('click',(event)=>{
	if (event.target.classList.contains("button")) {
		let btnPressed = event.target.innerText;
		if (isNaN(btnPressed)) {
			otherFunctions(btnPressed);
		}
		else{
			if (btnPressed === "00") {
				equation += Number.parseInt("00")
				display.value += Number.parseInt("00")
			}
			equation += Number.parseInt(btnPressed);
			display.value += Number.parseInt(btnPressed);
			console.log(Number.parseInt(equation))
		}
	}
});
function otherFunctions(btnPressed){
	if (btnPressed == "AC") {
		equation = ""; 
	    display.value = "";
	}else if (btnPressed == "DE"){ display.value = equation.slice(0, -1)
    }else if (
    	btnPressed === "." || 
    	btnPressed === "/" || 
    	btnPressed === "*" || 
    	btnPressed === "-" || 
    	btnPressed === "+"){
    	
    	display.value += btnPressed;
    	equation += btnPressed;
    }else if (btnPressed === "=") {
    	calculate()
    }
}
function calculate(){
	try{
		if (display.value === "") {display.value = "Empty"}
		else{display.value = ""; display.value = eval(equation) }
	}catch(err){
		display.value = "Invalid value"
	}
}

/*problems:-
1. DE function isnt working properly
*/