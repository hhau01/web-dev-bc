$("h1").text();

$("ul").text();

$("li").text();

// Change h1 to New Text
$("h1").text("New Text!!");

// Change all lis to ..
$("li").text("Ma dawg is cute yo");

// Grab all innerhtml
$("ul").html();

// If a user types something in, we'd want them to type it in as 'text'
$("ul").html("<li>Hello hello</li><li>Ma dog cute</li><li>You Qute</li>");

// Change img src
$("img").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

// Change input type to color, checkbox, etc
// $("input").attr("type", "color");

$("img").css("width", "200px");
$("img:first-of-type").css("height", "200px");
$("img").last().css("height", "150px");
// $("img").css("height", "200px");

