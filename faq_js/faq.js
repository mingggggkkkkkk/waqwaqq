$(document).ready(function(){
    $('li a').click(function(){
        $(this).next('.answer').slideToggle();
        var icon = $(this).find('.icon');
        // return false;
    });

});

