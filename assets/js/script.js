function changeTitle(val){
	document.title = val;
}
function toggleMenu(menu){
	menu.classList.toggle("opened");
	//document.querySelector(".nav-links").classList.toggle("opened");
	var navLinks = document.querySelector(".nav-links");
	navLinks.style.display = navLinks.style.display == "block" ? "none" : "block";
	
}
