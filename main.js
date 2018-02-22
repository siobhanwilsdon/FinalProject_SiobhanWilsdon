$('.about-container').hide();

$('#show').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500)
    $('.about-container').show();
    $('.wires-img').hide();
    $('#show').hide();
});

$('#hide').click(function() {
    $('.about-container').hide();
    $('.wires-img').show();
    $('#show').show();
});

// ALL PROJECTS PAGE: //

$('.about-container').hide();

$('#show-projects-page').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500)
    $('.about-container').show();
    $('#show-projects-page').hide();
});

$('#hide-projects-page').click(function() {
    $('.about-container').hide();
    $('#show-projects-page').show();
});
