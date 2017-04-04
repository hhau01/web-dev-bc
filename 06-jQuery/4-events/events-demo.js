// $("h1").click(function() {
//     alert('h1 clicked');
// });

// $("button").click(function() {
//     var text = $(this).text();
//     console.log("You clicked " + text);
//     $(this).css("background", "pink");
// });

// $("input[type='text'").keypress(function(event) {
//     if (event.which === 13) {
//         alert("You hit ENTER")
//     }
// });

$('h1').on('click', function() {
    $(this).css('color', 'purple')
});

$('input').on('keypress', function() {
    console.log('Key pressed');
});

$('button').on('mouseenter', function() {
    $(this).css('font-weight', 'bold');
});

$('button').on('mouseleave', function() {
    $(this).css('font-weight', 'normal');
});

