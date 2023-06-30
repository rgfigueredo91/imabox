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
const navMenu = document.querySelector(".nav-text")
const topNavBar = document.querySelector(".top-navbar")
const navBranding = document.querySelector(".nav-branding")
const navBar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active")
	navMenu.classList.toggle("active")
	topNavBar.classList.toggle("active")
	navBranding.classList.toggle("active")
	navBar.classList.toggle("active")

})

document.querySelectorAll(".nav-link").forEach(n => n.
	addEventListener("click",() => {
		hamburger.classList.remove("active")
		navMenu.classList.remove("active")
		topNavBar.classList.remove("active")
		navBranding.classList.remove("active")
		navBar.classList.remove("active")
	
	}))