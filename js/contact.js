var MAX_MB   = 5;
var MAX_BYTES = MAX_MB * 1024 * 1024;

document.getElementById("files").addEventListener("change", function (e) {
  var input   = e.target;
  var warning = document.getElementById("file-warning");
  var oversized = [];

  for (var i = 0; i < input.files.length; i++) {
    if (input.files[i].size > MAX_BYTES) {
      oversized.push(input.files[i].name);
    }
  }

  if (oversized.length > 0) {
    warning.textContent = "File too large (max 5 MB): " + oversized.join(", ");
    warning.style.display = "block";
    input.value = "";
  } else {
    warning.style.display = "none";
  }
});
