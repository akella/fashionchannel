$(document).ready(function () {
// -------------------- big banner scroll ----------------------- //
	$('.big-banner').scrollable({
			next:'.next',
			prev:'.prev'
	}).autoscroll({ autoplay: true });
	api = $('.big-banner').data('scrollable');
	$('.tab-big-banner a').hover(function() {
		$('.tab-big-banner a').removeClass("tab-big-banner__active");
		$(this).addClass("tab-big-banner__active");
	    ar = $(this).attr('href');
	    api.seekTo(ar, 300);
	    return false;
	});
	$('.tab-big-banner a').click(function() {
		return false;
	});
// -------------------- entry slider ---------------------------- //
	$('.entry-slider').scrollable({
			next:'.entry-slider-nav__next',
			prev:'.entry-slider-nav__prev'
	});
// -------------------- slider ---------------------------------- //
	$('.slider').scrollable({
			next:'.slider-nav__next',
			prev:'.slider-nav__prev'
	});
// -------------------- team slider ---------------------------- //
	$('.team__slider').scrollable({
			next:'.team__nav-next',
			prev:'.team__nav-prev'
	});
// ---------------------- entry Tabs ---------------------------- //
//reset
$(".entry-slider-wrapper").hide();
$(".entry-tabs li:first a").addClass("entry-tabs__active").show();  
$(".entry-slider-wrapper:first").show();
// main
  $(".entry-tabs a").click(function() { 
      $(".entry-tabs a").removeClass("entry-tabs__active");  
      $(this).addClass("entry-tabs__active");  
      $(".entry-slider-wrapper").hide();  
      var activeTab = $(this).attr("href");  
      $(activeTab).show();  
      return false; 
  });

// ----------------------- ON AIR popup -------------------------- //
$(".header__on-air").click(function() { 
	$(".on-air-bg, .on-air-popup").fadeIn();
      return false; 
  });
$(".on-air-popup__close").click(function() { 
	$(".on-air-bg, .on-air-popup").fadeOut();
      return false; 
  });

// ---------------------- Gallery -------------------------------- //
Galleria.run('#gallery', {
    showInfo: false,
    showCounter: false
});


})