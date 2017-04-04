$('#btn1').on('click', function() {
    // 1000 = 1s
    $('div').fadeToggle(1000, function() {
        // $(this).remove();
    });
});

$('#btn2').on('click', function() {
    // 1000 = 1s
    $('div').slideToggle(1000, function() {
        // $(this).remove();
    });
});