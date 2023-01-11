// user Interface Logic

function hideResults(){
    document.getElementById("sarah").setAttribute("class", "hidden");
    document.getElementById("ashley").setAttribute("class", "hidden");
    document.getElementById("emily").setAttribute("class", "hidden");
    document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
    document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      hideResults();
      const age = parseInt(document.querySelector("input#age").value);
      const height = parseInt(document.querySelector("input#height").value);
    };
};

