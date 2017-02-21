var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.background = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // get color of square
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // change each color to match given color
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    // random number up to colors.length + .999... Example: 6.999
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}