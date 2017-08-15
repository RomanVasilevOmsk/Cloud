
$(document).ready(function() {
    $(".hamburger").on('click', function(){
        $(".main-menu ul").slideToggle("fast");
    });
});

$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
});
