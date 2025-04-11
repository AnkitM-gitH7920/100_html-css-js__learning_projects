const arrow = document.querySelector(".png")
const dropdown = document.querySelector(".dropdown");
const selectedApp = document.getElementById("selectedApp");
const options = document.querySelectorAll(".option");
const ul = document.querySelector("ul");

arrow.addEventListener("click", () => {
	arrow.classList.toggle("rotate");
	dropdown.classList.toggle("open");
});

ul.addEventListener("mouseover", (event) => {
	const option = event.target.closest(".option");
	if (option) {
		selectedApp.innerText = option.querySelector("p").innerText;
	}
});