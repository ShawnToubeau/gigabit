
$(window).on('scroll', function() {
 if ($(window).scrollTop() > $("#landing-page").height() - 150 ) {
   $('#second-navbar').show(400);
 } else {
   $('#second-navbar').hide(400);
 }
});

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".navBtn").css("display") != "none" ){
        closeNav()
    }
}
