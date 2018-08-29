/* 
 * This script uses the following libraries:
 *  jQuery 1.7x: 
 *  Copyright JS Foundation and other contributors, https://js.foundation/
 *  Simple Parallax Scrolling parallax.min.js
 * 
 */

$(document).ready(function(){
    $("#small").click(function(event){
        // Prevent default small click behavior
        event.preventDefault();
        // Using jQuery's animate() method to add smooth font resizing
        $("h1").animate({"font-size":"25px"});
        $("h2").animate({"font-size":"24px"});
        $("p").animate({"font-size":"12px"});
        $(".ptext").animate({"font-size":"22px"});
        $("section").animate({"padding":"47px 80px"})
    });
  
    $("#medium").click(function(event){
        // Prevent default medium click behavior
        event.preventDefault();
        // Using jQuery's animate() method to add smooth font resizing
        $("h1").animate({"font-size":"36px"});
        $("h2").animate({"font-size":"32px"});
        $("p").animate({"font-size":"16px"});
        $(".ptext").animate({"font-size":"27px"});
        $("section").animate({"padding":"40px 80px"})
    });
  
    $("#large").click(function(event){
        // Prevent default large click behavior
        event.preventDefault();
        // Using jQuery's animate() method to add smooth font resizing
        $("h1").animate({"font-size":"48px"});
        $("h2").animate({"font-size":"40px"});
        $("p").animate({"font-size":"20px"});
        $(".ptext").animate({"font-size":"32px"});
        $("section").animate({"padding":"32.5px 80px"})
    });
  
    $("#fontControls a").click(function() {
        //remove class "selected" from previously selected option
        $("a").removeClass("selected");
        //show selected option with class "selected"
        $(this).addClass("selected");
    });
});
