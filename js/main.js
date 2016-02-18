$(document).ready(function(){

	console.log('pashet');
	$('.additional-services-h a').click(function(){
		$(this).toggleClass('active');
		$('.additional-services-cont').slideToggle();
		return false;
	});

});