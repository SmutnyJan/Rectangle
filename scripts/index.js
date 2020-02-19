const formSubmitted = function(e) {
   
}

const init = function() {
    let form = document.getElementById("squareForm");
    form.addEventListener("submit", formSubmitted);
}



window.addEventListener("DOMContentLoaded", init);
