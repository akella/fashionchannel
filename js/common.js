$(document).ready(function () {
// -------------------- entry slider ---------------------------- //
	$('.entry-slider').scrollable({
			next:'.entry-slider-nav__next',
			prev:'.entry-slider-nav__prev'
	});
// -------------------- slider ---------------------------- //
	$('.slider').scrollable({
			next:'.slider-nav__next',
			prev:'.slider-nav__prev'
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
})