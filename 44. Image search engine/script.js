const searchBar = document.getElementById("searchImg");
const searchBtn = document.getElementById("btn");

let page = 1;
let input = searchBar.value;
async function getImages(input){
	try{
		if (searchBar.value == "") { alert("Can't search empty input"); }
		else{
			document.querySelector("main").innerHTML = "";
			document.querySelector("main").style.display = "flex";
			document.querySelector(".showMore").style.display = "block";
			let response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=drnLm7lmhxP8gs5sJCf_057LHXfkehqb6WsU3xypJPU&per_page=30`);
			searchBar.value = "";
			let data = await response.json();
			let data_Results = data.results;
			console.log(data)
			data_Results.forEach((result,index)=>{
				let imageUrls = result.urls.small;
				let dynamicImgTag = document.createElement("img");
				dynamicImgTag.src = imageUrls;
				dynamicImgTag.onclick =()=>{
					location.href = imageUrls
				}
				document.querySelector("main").appendChild(dynamicImgTag)
			});
		};
	}catch(err){
		console.log(err)
	}
};

searchBtn.addEventListener("click",()=>{
	getImages(input)
});
searchBar.addEventListener("keydown",(event)=>{
	if (event.key == "Enter") {
		getImages(input);
	}else{ return }
});


if (document.querySelector(".showMore").style.display == "block") {
	document.querySelector(".showMore").addEventListener("click",()=>{
		page++;
		getImages(input);
	});
};