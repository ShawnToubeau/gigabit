
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

$(window).resize(function(){
	if ($(window).width() >= 678){	
		closeNav()
	}	
});
