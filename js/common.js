$(document).ready(function () {

// -------------------- main menu top ----------------------- //
$('.entry__title-level-3').hover(
  function () {$(this).children('a').addClass('entry__title-level-3-active');},
  function () {$(this).children('a').removeClass('entry__title-level-3-active');}
);

// -------------------- pagin ----------------------- //
pagin_height = $('.pagin li').height();
$('.pagin li a').css('height', pagin_height);


var pixelColor;
// -------------------- big banner scroll ----------------------- //
if ($('.big-banner').length > 0) {
$(".tab-big-banner__1 a").addClass("tab-big-banner__active");
	$('.big-banner').scrollable({
		next:'.next',
		prev:'.prev',
    circular: true,
    onSeek: function() {

      var currentItem = this.getItems().eq(this.getIndex());
      var index = this.getIndex();

      $(".tab-big-banner a").each(function () {
        if ($(this).attr("href") == index) {
            $(".tab-big-banner a").removeClass("tab-big-banner__active");
            $(this).addClass("tab-big-banner__active");
        }
      });
    }
	}).autoscroll({ autoplay: true });
	api = $('.big-banner').data('scrollable');
	$('.tab-big-banner a').hover(function() {
		$('.tab-big-banner a').removeClass("tab-big-banner__active");
		$(this).addClass("tab-big-banner__active");
	    ar = $(this).attr('href');
	    api.seekTo(ar, 200);
	    return false;
	});
	$('.tab-big-banner a').click(function() {
		return false;
	});
};
// -------------------- entry slider ---------------------------- //
if ($('.entry-slider').length > 0) {
	$('.entry-slider').scrollable({
			next:'.entry-slider-nav__next',
			prev:'.entry-slider-nav__prev'
	});
};
// -------------------- slider ---------------------------------- //
if ($('.slider').length > 0) {
	$('.slider').scrollable({
			next:'.slider-nav__next',
			prev:'.slider-nav__prev'
	});
};
// -------------------- team slider ---------------------------- //
if ($(".team__slider").length > 0) {
  $('.team__slider').scrollable({
    next:'.team__nav-next',
    prev:'.team__nav-prev'
  });
  // Get the Scrollable control
  var scrollable_list_1 = $(".team__slider").data("scrollable");
  // Set to the number of visible items
  var number_list = 5;
  // Handle the Scrollable control's onSeek event
  scrollable_list_1.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
      $(".team__nav-next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_1.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
};
// -------------------- article scroll video ---------------------------- //
  if ($(".article__scroll").length>0) {
    $('.article__scroll').scrollable({
    next:'.article__scroll-next',
    prev:'.article__scroll-prev'
  });
  // Get the Scrollable control
  var scrollable_list_1 = $(".article__scroll").data("scrollable");
  // Set to the number of visible items
  var number_list = 4;
  // Handle the Scrollable control's onSeek event
  scrollable_list_1.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
      $(".article__scroll-next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_1.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
};
if ($(".advt__scroll").length>0) {
$('.advt__scroll').scrollable({
      next:'.advt__next',
      prev:'.advt__prev'
  });
};

// --------------------------- anchor nav ------------------------------ //
$(".anchor-nav a").click(function(){
  $(".anchor-nav a").removeClass("active");
  $(this).toggleClass("active");
});


$(".brand-h3__key").click(function(){
  $(this).parent().next().toggle('fast',function(){
    height: "100%"
  });
  return false;
});
$(".brand-h3__key").toggle(
    function() {$(this).text("Показать");},
    function() {$(this).text("Скрыть");}
  );
// -------------------- afisha scroll video ---------------------------- //
if ($(".afisha-v").length>0) {
  $('.afisha-v').scrollable({
      next:'.afisha-v-nav__next',
      prev:'.afisha-v-nav__prev'
  });
  // Get the Scrollable control
  var scrollable_list_1 = $(".afisha-v").data("scrollable");
  // Set to the number of visible items
  var number_list = 3;
  // Handle the Scrollable control's onSeek event
  scrollable_list_1.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
      $(".afisha-v-nav__next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_1.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
}
// -------------------- afisha scroll photo ---------------------------- //	
if ($(".afisha-p").length>0) {
  $('.afisha-p').scrollable({
      next:'.afisha-p-nav__next',
      prev:'.afisha-p-nav__prev'
  });
  // Get the Scrollable control
  var scrollable_list_1 = $(".afisha-p").data("scrollable");
  // Set to the number of visible items
  var number_list = 3;
  // Handle the Scrollable control's onSeek event
  scrollable_list_1.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
      $(".afisha-p-nav__next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_1.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
}
// -------------------- afisha scroll article ---------------------------- //
	
if ($(".afisha-a").length>0) {
  $('.afisha-a').scrollable({
    next:'.afisha-a-nav__next',
    prev:'.afisha-a-nav__prev'
  });
// Get the Scrollable control
  var scrollable_list_2 = $(".afisha-a").data("scrollable");
  // Set to the number of visible items
  var number_list_2 = 4;
  // Handle the Scrollable control's onSeek event
  scrollable_list_2.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) {      // Disable the Next link
      $(".afisha-a-nav__next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_2.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
};
// -------------------- gallery-news scroll ---------------------------- //
if ($(".gallery-news__slide").length>0) {
  $('.gallery-news__slide').scrollable({
    next:'.gallery-news__next',
    prev:'.gallery-news__prev'
  });
  // Get the Scrollable control
  var scrollable_list_2 = $(".gallery-news__slide").data("scrollable");
  // Set to the number of visible items
  var number_list_2 = 3;
  // Handle the Scrollable control's onSeek event
  scrollable_list_2.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) {      // Disable the Next link
      $(".gallery-news__next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_2.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
}

// -------------------- looks pop scroll ---------------------------- //
if ($(".pop-look-scroll").length>0) {
  $('.pop-look-scroll').scrollable({
    next:'.look-nav__next',
    prev:'.look-nav__prev'
  });
  // Get the Scrollable control
  var scrollable_list_2 = $(".pop-look-scroll").data("scrollable");
  // Set to the number of visible items
  var number_list_2 = 4;
  // Handle the Scrollable control's onSeek event
  scrollable_list_2.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) {      // Disable the Next link
      $(".look-nav__next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_2.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
}

$('.gallery-news__items a').click(function() {
  gnia = $(this).attr('href');  
  $('.gallery-news__pic img').attr('src', gnia);
  return false;
});

if ($(".look-thing-src .gallery-news__slide").length>0) {
// Get the Scrollable control
  var scrollable_list_2 = $(".look-thing-src .gallery-news__slide").data("scrollable");
  // Set to the number of visible items
  var number_list_2 = 7;
  // Handle the Scrollable control's onSeek event
  scrollable_list_2.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) {      // Disable the Next link
      $(".look-thing-src .gallery-news__next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_2.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
}

$("gallery-news__items .other-looks").click(function(){
  
});
// -------------------- calendar scroll ---------------------------- //
if ($('.calendar__scroll').length>0) {
	$('.calendar__scroll').scrollable({
			next:'.calendar__next',
			prev:'.calendar__prev'
	});
};
// --------------------- calendar popup -------------------------------//
$('.afisha-title__date, .calendar').click(function() {
	$('.calendar').addClass("calendar_act");
	return false;
});
$('body').click(function() {
	if($('.calendar').hasClass("calendar_act"))
  $('.calendar').removeClass("calendar_act");
	
});

// ------------------- Gallery look.single ------------------//
$(".look-thing-src img").click(function() {
  $(".look-thing-src img").css("opacity","0.5");
  $(this).css("opacity","1");
});

// --------------------- video -------------------------------//
	var video_url = $('.article__scroll-item:first a').attr("href");
	$(".article__video iframe").attr("src", video_url);
	$('.article__scroll-item:first a').addClass("article__video-active");
	var video_text = $('.article__scroll-item:first a').children(".js-block").html();
	$(".article__video-descr").html(video_text);
	$('.article__scroll-item a').click(function() {

		$('.article__scroll-item a').removeClass("article__video-active");
		$(this).addClass("article__video-active");
		var video_url = $(this).attr("href");
		$(".article__video iframe").attr("src", video_url);

		var video_text = $(this).children(".js-block").html();
		$(".article__video-descr").html(video_text);
		return false;
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

// -------------- Vacancy select and input----------------------- //
$('.vacancy-form__user select').change(function() {
    vfu = $('.vacancy-form__user select option:selected').html();
    $(this).prev().html(vfu);
});
$('.vacancy-form__resume select').change(function() {
    vfr = $('.vacancy-form__resume select option:selected').html();
    $(this).prev().html(vfr);
});
$('.add-resume').change(function() {
	arv = $(this).val();
	$(this).prev().prev().val(arv);
});

// ---------------------- Edit detail ---------------------------- //
$('.new-look__added a').toggle(function() {
  $(this).parent().next().slideDown();
	return false;
}, function() {
  $(this).parent().next().slideUp();
	return false;
});

// ---------------------- look list ---------------------------- //
$('.new-look__sex input').click(function() {
    $(this).next().css('display', 'block');
});
$('.new-look__sex li').click(function() {
    nls = $(this).text();
    $(this).parent().prev().attr('value', nls);
    $('.new-look__sex ul').css('display', 'none');
});
$('.new-look__dl').toggle(function() {
    $('.new-look__dl').removeClass('new-look__dl_active')
    $(this).addClass('new-look__dl_active');
}, function() {
    $('.new-look__dl').removeClass('new-look__dl_active')
    $(this).removeClass('new-look__dl_active');
});
$('.new-look__scr li').click(function() {
    nlid = $(this).parent().attr('item-data');
    nll = $(this).text();
    $('#' + nlid).attr('value', nll);
});
// ---------------------- programm list ---------------------------- //
$('.programm strong').toggle(function() {
    $('.programm__info').hide();
    $('.programm li').removeClass('programm__active')
    $(this).next().next().next().show();
    $(this).parent().addClass('programm__active');
}, function() {
    $('.programm__info').hide();
    $('.programm li').removeClass('programm__active')
    $(this).next().next().next().hide();
    $(this).parent().removeClass('programm__active');
});


// ---------------------- Lupa ------------------------------- //
(function ($) {
    $.fn.imageLens = function (options) {

        var defaults = {
            lensSize: 100,
            borderSize: 4,
            borderColor: "#888", 
            lensCss: 'megalupa'
        };
        var options = $.extend(defaults, options);
        var lensStyle = "background-position: 0px 0px;width: " + String(options.lensSize) + "px;height: " + String(options.lensSize)
            + "px;float: left;display: none;border-radius: " + String(options.lensSize / 2 + options.borderSize)
            + "px;border: " + String(options.borderSize) + "px solid " + options.borderColor 
            + ";background-repeat: no-repeat;position: absolute;";

        return this.each(function () {
            obj = $(this);

            var offset = $(this).offset();

            // Creating lens
            var target = $("<div style='" + lensStyle + "' class='" + options.lensCss + "'>&nbsp;</div>").appendTo($(this).parent());
            var targetSize = target.size();

            // Calculating actual size of image
            var imageSrc = options.imageSrc ? options.imageSrc : $(this).attr("src");
            var imageTag = "<img style='display:none;' src='" + imageSrc + "' />";

            var widthRatio = 0;
            var heightRatio = 0;

            $(imageTag).load(function () {
                widthRatio = $(this).width() / obj.width();
                heightRatio = $(this).height() / obj.height();
            }).appendTo($(this).parent());

            target.css({ backgroundImage: "url('" + imageSrc + "')" });

            target.mousemove(setPosition);
            $(this).mousemove(setPosition);

            function setPosition(e) {

                var leftPos = parseInt(e.pageX - offset.left);
                var topPos = parseInt(e.pageY - offset.top);

                var canvas = document.getElementById("mycanvas");
                var context = canvas.getContext("2d");
                var img = new Image();   
                img.onload = function(){
                    context.drawImage(img, 0, 0);
                };
                img.src = 'images/new-look.jpg'; 
                var canvasOffset = $(canvas).offset();
                var canvasX = leftPos;
                var canvasY = topPos;
                var imageData = context.getImageData(canvasX, canvasY, 1, 1);
                var pixel = imageData.data;
                var pixelColor = "rgba("+pixel[0]+", "+pixel[1]+", "+pixel[2]+", "+pixel[3]+")";
                $('#preview').css('backgroundColor', pixelColor);
                $('.new-look__pic div').css('border-color', pixelColor)             
                if (leftPos < 0 || topPos < 0 || leftPos > obj.width() || topPos > obj.height()) {
                    target.hide();
                }
                else {
                    target.show();
                    leftO = $('.new-look__pic').offset().left;
                    topO = $('.new-look__pic').offset().top;
                    leftPos = e.pageX - leftO - 100;
                    topPos = e.pageY - topO - 100;
                    target.css({ left: leftPos + 'px', top: topPos + 'px' });
                    leftPos = String(((e.pageX - leftO) * widthRatio - target.width() / 2) * (-1));
                    topPos = String(((e.pageY - topO) * heightRatio - target.height() / 2) * (-1));
                    target.css({ backgroundPosition: leftPos + 'px ' + topPos +'px' });
                }
            }            
        });
    };
})(jQuery);
if ($("#lupa").length > 0) {
    $("#lupa").imageLens({ lensSize: 180, borderSize: 10});
};

// ---------------------- tv programm ---------------------------- //
if ($('.schedule__slide').length >0) {
$(".schedule__slide").draggable({
  containment:".schedule__slide-out",
   scroll:false,
    stop: function(){
      drg = $('.schedule__slide').position().left;
      if (drg < 70) {
        alert('Время от 05:00 до 8:00');
      };
      if (drg >= 70 && drg < 210) {
        alert('Время от 8:00 до 11:00');
      };
      if (drg >= 210 && drg < 330) {
        alert('Время от 11:00 до 14:00');
      };
      if (drg >= 330 && drg < 460) {
        alert('Время от 14:00 до 17:00');
      };
      if (drg >= 460 && drg < 590) {
        alert('Время от 17:00 до 20:00');
      };
      if (drg >= 590 && drg < 720) {
        alert('Время от 20:00 до 23:00');
      };
      if (drg >= 720 && drg < 810) {
        alert('Время от 23:00 до 01:00');
      };
      if (drg >= 810) {
        alert('Время от 01:00 до 03:00');
      };
    }
});
};
  

  
//open gallery popup 
$('.album__photo').click(function() {
  $('.gallery-out, .gallery_single').fadeIn(300);
});
$('.gallery__close').click(function() {
  $('.gallery-out, .gallery_single').fadeOut(300);
});
$('.pop-albums a, .last-albums__item-b a').click(function() {
  $('.gallery-out, .gallery_all').fadeIn(300);
});
$('.gallery__close').click(function() {
  $('.gallery-out, .gallery_all').fadeOut(300);
});



// ---------------------- Gallery -------------------------------- //
if ($('#gallery').length > 0) {
  hash_txt = 'slide';
  if (hash_txt == window.location.hash.substring(1,6)) {
    $('.gallery-out, .gallery_all, .gallery_single').fadeIn(300);
    hash_val = window.location.hash.slice(6);
    
  };
  Galleria.run('#gallery', {
      showInfo: false,
      showCounter: false,
      maxScaleRatio: 1
  });
  Galleria.ready(function() {
    this.show(2);
    this.bind("image", function(e) {
      valp = e.index;
      valp_new = valp + 1;
      window.location.hash = 'slide' + valp_new + '';      
    });    
  });   
};


})