$(document).ready(function(){
    $('img').click(function() {
        $(this).fadeTo('fast', 0);
    });
    $('button').click(function() {
        $('img').fadeTo('fast', 1);
    });
})