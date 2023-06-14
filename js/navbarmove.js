let lastScrollTop = 100; 
		
			navbar = document.getElementById("navbar-noboots");
			titleremove = document.getElementById("removeidtitle");
			window.addEventListener("scroll", function () {
				var scrollTop = window.pageYOffset || document
					.documentElement.scrollTop;
					
				if (scrollTop > lastScrollTop) {
					navbar.style.background = "white";	
				} 
				else {
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



			
			
			


			