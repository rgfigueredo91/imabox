const faders = document.querySelectorAll(".fade-in");
			setTimeout(function(){
				faders[0].classList.remove("fade-in");
				faders[0].classList.add("appear");
				console.log(faders)
			
			}, 1000);
			