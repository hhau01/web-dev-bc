// Process - select an elemtn and add an event listener
var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!");
});

var button = document.querySelector("button");
var para = document.querySelector("p");

button.addEventListener("click", function() {
    para.textContent = "Yes!!"
});

var h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
    h1.style.background = "orange";
});

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
    });
}