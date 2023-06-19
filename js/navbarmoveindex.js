/* let lastScrollTop = 100; 
		
			navbar = document.getElementById("navbar-noboots");
			titleremove = document.getElementById("removeidtitle");
			window.addEventListener("scroll", function () {
				var scrollTop = window.pageYOffset || document
					.documentElement.scrollTop;
					
				if (scrollTop > lastScrollTop) {
					navbar.style.background = "black";	
				} 
				else {
					navbar.style.background = "none";
				}
				lastScrollTop = scrollTop;
			})

			*/

const hamburger = document.querySelector(".div-bar")
const navMenu = document.querySelector(".nav-menu")
const navMenuDos = document.querySelector(".nav-menuDos")

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active")
	navMenu.classList.toggle("active")
	navMenuDos.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.
	addEventListener("click",() => {
		hamburger.classList.remove("active")
		navMenu.classList.remove("active")
		navMenuDos.classList.remove("active")
	}))