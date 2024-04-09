var aboutMe = $('#about-me').children();

aboutMe.hide();

$(window).on('scroll', function() {
	if ($(window).scrollTop() >= 450) 
        aboutMe.fadeIn(1200);

}) 

