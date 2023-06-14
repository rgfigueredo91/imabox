let lastScrollTop = 100; 
		
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