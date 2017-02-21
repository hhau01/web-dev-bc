var h1 = document.querySelector("h1");

h1.style.color = "yellow";
h1.style.border = "5px solid pink"

// ALTERNATIVE 
// var tag = document.querySelector("h1")

// // DEFINE CLASS IN CSS
// // .some-class {
// //     color: blue;
// //     border: 10px solid red;
// // }

// tag.classList.add("some-class");

var p = document.querySelector("p")
p.classList.add("big");

p1 = document.getElementsByTagName("p")[0];

var ul = document.querySelector("ul");

// p.textContent = "Corgi"

// innerHTML vs textContent
// innerHTML treats content as HTML
// textContent just treats it as text
console.log(p.innerHTML)
console.log(ul.innerHTML)

document.querySelector("h1").textContent = "END OF LESSON!";