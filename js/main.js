$(document).ready(function(){

	// Карусель на главной
	var owl = $('.js-corusel_inner');
	if(owl.length) {
		owl.owlCarousel({
			items:1,
	        loop:true,
	        nav:false,
	        autoplay:true,
			autoplayTimeout:3000,
			smartSpeed: 600
		})
	};



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
	$('.bank-tarif--lnk').click(function(){
		$(this).toggleClass('active');
		$(this).next('.bank-tarif-cont').slideToggle();
		return false;
	});

	// Подбор карты
	$('.cart-select-center a').click(function(){
		$('.cart-select-center a').removeClass('active');
		$(this).addClass('active');
		var index = $(this).index();
		$('.shop_select-center').hide();
		$('.shop_select-center').eq(index).show();
		return false;
	});
	$('.shop_select-center a').click(function(){
		$('.shop_select-center a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('.shop_select-center:not(:first)').hide();
	$('.search_cart').click(function(){
		$(this).parents('.popup_step_1').hide();
		$(this).parents('.popup_step_1').next().show();
		return false;
	});

	$('.sl_3--item:not(:first)').hide();
	$('.sl_3--tab a').click(function(){
		var index = $(this).parents('li').index();
		$('.sl_3--item').hide();
		$('.sl_3--item').eq(index).show();
		$('.sl_3--tab li').removeClass('active');
		$(this).parents('li').addClass('active');
		return false;
	});


	$('a[href^="#"], a[href^="."]').click(function(){
	    var anchor = $(this).attr('href');
	    $('html, body').stop().animate({
	      scrollTop: $(anchor).offset().top
	    }, 1000);
	    return false;
	});


	$('.lnk_help a').click(function(){
		$(this).parent().next('.lnk_help-open').slideToggle();
		$(this).toggleClass('active');
		return false;
	});


	
	// Попап
	  var popupOpen;
	  $(".popup_open").click(function(){
	    $('.popup:visible').fadeOut(200);
	    popupStatus = 0;
	    popupOpen = $(this).attr('rel');
	    loadPopup(popupOpen);
	    var popupTop = $(window).scrollTop() + 35;
	    $(popupOpen).css({'top' : popupTop + 'px'});
	    return false;
	  });
	  $(".popup_close").click(function(){
	    disablePopup();
	    return false;
	  });
	  $(".demo_close, .js-close").click(function(){
	    disablePopup();
	    return false;
	  });
	  $(".popup_bg").click(function(){
	    disablePopup();
	  });
	  $(document).keypress(function(e){
	    if(e.keyCode==27 && popupStatus==1){
	      disablePopup();
	    }
	  });


});

// Попап
var popupStatus = 0;

function loadPopup(popupOpen){
  if(popupStatus==0){
    $(".popup_bg").css({
      "opacity": "0.80"
    });
    $(".popup_bg").fadeIn(200);
    $(popupOpen).fadeIn(200);
    popupStatus = 1;
  }
}

function disablePopup(){
  if(popupStatus==1){
    $(".popup_bg").fadeOut(200);
    $(".popup").fadeOut(200);
    popupStatus = 0;
  }
}