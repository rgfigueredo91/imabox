let lastScrollTop = 100; 
		
			navbar = document.getElementById("navbar-noboots");
			titleremove = document.getElementById("removeidtitle");
			window.addEventListener("scroll", function () {
				var scrollTop = window.pageYOffset || document
					.documentElement.scrollTop;
				if (scrollTop > lastScrollTop) {
					navbar.style.top = "-100px";
					navbar.style.background = "white";
					titleremove.style.opacity = "100";
					
					
					
				} else {
					navbar.style.top = "0";
					navbar.style.background = "none";
					titleremove.style.opacity = "0";
					
					
					
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

	
			function waitingForAnimation(){
				alert("We are still working on this part of the website")
			}


			
			
			


			