var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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
            h1.style.background = clickedColor;
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

function generateRandomColors(num) {
    // Make an array
    var arr = [];
    // Add num random colors to array
    for(var i = 0; i < num; i++) {
        // Get random color and push into arr
        arr.push(randomColor());
    }
    // Return array
    return arr;
}

function randomColor() {
    // Pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // Pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    // Pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}