// Grab h1
$("h1")

// Grab anchor tag
$("a")

// Grab anchor tag inside li inside ul
$("ul li a")

// Change color to yellow
$("h1").css("color", "yellow");

// change color to blue
$("li").css("color", "blue");

// in vanilla javascript
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
    lis[i].style.color = "green";
}

// select all anchor tags and increase font size
$("a").css("font-size", "40px");

// jQuery objects are camelCased
$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background: "rgba(89, 45, 20, 0.5)"
});