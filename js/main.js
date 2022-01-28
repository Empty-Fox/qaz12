///////////dropBox///////
$(".cultureCode-item").on("click", (function () {
  $(this).toggleClass("active");
}
))

/////////////////////burger click///////////////
$("#checkbox").on("click", (function () {
  if ($(this).hasClass('active1')) {
    $(this).removeClass('active1');
    $(".navbar").animate({height:64},500)
  }
  else {
    $(".navbar").animate({height:370},500)
    $(this).addClass('active1');
  }
}
))

if ($(window).width() < 768) {
  $(".menu-items a").on("click", (function () {
    $('#checkbox').trigger('click'); 
    $('#checkbox').removeClass('active1');
    $(".navbar").animate({height:64},0)
 }
 
 ))
}

$(function(){
  $("[href^='#']").not("[href~='#']").click(function(evt){
   evt.preventDefault();
   var obj = $(this),
   getHref = obj.attr("href").split("#")[1],
   offsetSize = 250;
   $(window).scrollTop($("[id*='"+getHref+"']").offset().top - offsetSize);
  });
 });




/////////////animation images on scroll////////

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

window.onload = function() {
  document.body.className += " loaded";
}

/////////////////////////////////////////////////////////

(function ( $ ) {
  //Make your content a heroe
  $.fn.transformHeroes = function() {
      //Variables
      var perspective = '500px',
      delta = 20,
      width = this.width(),
      height = this.height(),
      midWidth = width / 2,
      midHeight = height / 2;
      //Events
      this.on({
      	mousemove: function(e) {
      		var pos = $(this).offset(),
      		cursPosX = e.pageX - pos.left,
      		cursPosY = e.pageY - pos.top,
      		cursCenterX = midWidth - cursPosX,
      		cursCenterY = midHeight - cursPosY;

      		$(this).css('transform','perspective(' + perspective + ') rotateX('+ (cursCenterY / delta) +'deg) rotateY('+ -(cursCenterX / delta) +'deg)');
      		$(this).removeClass('is-out');
      	},
      	mouseleave: function() {
      		$(this).addClass('is-out');
      	}
      });
      //Return
      return this;
  };
}( jQuery ));

//Set plugin on cards
$('.card').transformHeroes();