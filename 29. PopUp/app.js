const sbBtn = document.getElementById("submit");
const popup = document.querySelector("section");
const okBtn = document.querySelector("section > button");

sbBtn.addEventListener("click",()=>{
	popup.classList.add("showPopup")
	if (popup.classList.contains("showPopup")) {
		okBtn.addEventListener("click",()=>{
			popup.classList.remove("showPopup")
		})
	}
});