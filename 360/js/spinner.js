

var showSpinner = function(){document.getElementById("spinner-wrapper").style.display = "block";}
var hideSpinner = function(){document.getElementById("spinner-wrapper").style.display = "none";}

function withTime(){
  hideSpinner()
}

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(withTime, 4000)
});
  