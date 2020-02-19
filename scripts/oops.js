
const urlParams = new URLSearchParams(window.location.search);
const width = urlParams.get("width");
const height = urlParams.get("height");
let rec = new math(width, height);




const init = function() {
    document.getElementById("volume").value = rec.volume();
    document.getElementById("perimeter").value = rec.perimeter();
}

window.addEventListener("DOMContentLoaded", init);