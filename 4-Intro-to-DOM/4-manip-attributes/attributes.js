//  use getAttributes() and setAttributes() to read and write attributes like src or href
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "http://www.google.com");


// if original image is https then picture has to be from https
var img = document.querySelector("img");
img.setAttribute("srcset", "https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg");
img.style.height = "100px";
img.style.width = "200px";
img.style.border = "2px solid red";

// returns array-like object
var links = document.getElementsByTagName("a");
for(var i = 0; i < links.length; i++) {
    // console.log(links[i].textContent);
    links[i].style.background = "pink";
    links[i].style.border = "1px dashed purple";
    links[i].style.color = "orange";
    // console.log(links[i].getAttribute("href"));
    links[i].setAttribute("href", "http://bing.com")
}