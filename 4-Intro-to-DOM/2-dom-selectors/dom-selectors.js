// get directory information of object 
console.dir(object)

// Open console and type these in
document.URL;
document.head;
document.body;
document.links;

// Methods
// document comes with a bunch of methods. Here are a few:
var tag = document.getElementById("highlight")

// RETURNS LIST
// tags[0], tags.length
var tags = document.getElementsByClassName("bolded")

// RETURNS LIST
// return li's, body, head, etc
var tag = document.getElementsByTagName("li")

// Any CSS selector - returns one element
// by id
var tag = document.querySelector("#highlight")
// by class
var tag = document.querySelector(".bolded")

// returns all elements
document.querySelectorAll()