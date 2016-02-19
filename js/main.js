$(document).ready(function(){

	$('.additional-services-h a').click(function(){
		$(this).toggleClass('active');
		$('.additional-services-cont').slideToggle();
		return false;
	});

	$('.tabs-item:first').show();
	$('.list-tabs a').click(function(){
		var index = $(this).parent().index();
		$(this).parents('.list-tabs').find('li').removeClass('active');
		$(this).parents().addClass('active');
		$('.tabs-item').hide();
		$('.tabs-item').eq(index).show();
		return false;
	});

	$('.bank-tarif-h').click(function(){
		$(this).toggleClass('active');
		$(this).next('.bank-tarif-cont').slideToggle();
	});



});