
$(window).on('scroll', function() {
 if ($(window).scrollTop() > $("#landing-page").height() - 150 ) {
   $('#second-navbar').show(400);
 } else {
   $('#second-navbar').hide(400);
 }
});
