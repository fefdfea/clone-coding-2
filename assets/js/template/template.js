$('.menu').on('click',function(e){
		e.preventDefault();
	$('.right-menu').addClass('right-menu-ani');
});

$('.fa-times-circle').on('click',function(e){
	$('.right-menu').removeClass('right-menu-ani');
});


$(window).on('scroll',function(){
	var scroll = $(window).scrollTop();
	console.log(scroll);
	if (scroll > 200 ){
		$('.black-container').fadeIn(1000);
	}
		if (scroll > 1200 ){
		$('.black-container').hide();
	}
	
		if (scroll > 900 ){
		$('.black-container2').fadeIn(1000);
	}
		if (scroll > 2100 ){
		$('.black-container2').hide();
	}
	
		if (scroll > 1700 ){
		$('.black-container3').fadeIn(1000);
	}
		if (scroll > 2800 ){
		$('.black-container3').hide();
	}
	
		if (scroll > 2400 ){
		$('.black-container4').fadeIn(1000);
	}
		if (scroll > 3500 ){
		$('.black-container4').hide();
	}
});



















