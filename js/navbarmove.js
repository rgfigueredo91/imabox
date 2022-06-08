let lastScrollTop = 100; 
		
			navbar = document.getElementById("navbar-noboots");
			window.addEventListener("scroll", function () {
				var scrollTop = window.pageYOffset || document
					.documentElement.scrollTop;
				if (scrollTop > lastScrollTop) {
					navbar.style.top = "-100px";
					navbar.style.background = "white";
		
					
					
					
				} else {
					navbar.style.top = "0";
					navbar.style.background = "none";
					
					
					
				}
				lastScrollTop = scrollTop;
			})

let lastScrollTop2 = 100;
			
			navbarphone = document.getElementById("phonenavbarid");
			window.addEventListener("scroll", function () {
				var scrollTop = window.pageYOffset || document
					.documentElement.scrollTop;
				if (scrollTop > lastScrollTop2) {
					navbarphone.style.opacity = "0.65";
					navbarphone.style.background = "black";
					
				} else {
					navbarphone.style.opacity = "1";
					navbarphone.style.background = "black";
				}
				lastScrollTop2 = scrollTop;
			})

	
			
			const faders = document.querySelectorAll(".fade-in");
	

			setTimeout(function(){
				faders[0].classList.remove("fade-in");
				faders[0].classList.add("appear");
				console.log(faders)
			
			}, 2500);
			
			
			


			