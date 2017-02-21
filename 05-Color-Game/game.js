// For future refactors

// var game = {}

// game.init = function() {
//     // Mode button event listeners
//     setUpModeButtons();

//     // Set up squares
//     setUpSquares();

//     // Add all the stuff / reset everything
//     reset();
// }

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // Mode button event listeners
    setUpModeButtons();

    // Set up squares
    setUpSquares();

    // Add all the stuff / reset everything
    reset();
}

function setUpModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
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
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    // Change color of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "#555";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
    reset();
});

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