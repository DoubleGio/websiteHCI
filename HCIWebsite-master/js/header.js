$(document).ready(function(){   //Transforms header from horizontal menu to dropdown menu for mobile mode
    $("#menubutton").click(function(event) {
        event.preventDefault();
        var x = document.getElementById("header");
        if (x.className === "header") {
            x.className += " responsive";
        } else {
            x.className = "header";
        }
        var y = document.getElementById("fontControls");    //Changing font when entering mobile header mode
        if (typeof y !== 'undefined') {
            if (y.className !== "responsive") {
                y.classList.add("responsive")
            } else {
                y.classList.remove("responsive")
            }
        }
    });
});
