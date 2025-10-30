$(document).ready(function() {
  "use strict";

  $(".header_wrap_bottom_burger").click(function() {
    $(".drodown").addClass("active");
  });
  
  $(".drodown_top_close").click(function() {
    $(".drodown").removeClass("active");
  });

  $(".drodown_cats .drop").click(function() {
    var attr = $(this).attr("data-target");
    $(".drodown").addClass("drop");
    $(`#${attr}`).addClass("active");
  });

  $(".drodown_item_back").click(function() {
    $(".drodown").removeClass("drop");
    $(".drodown_item").removeClass("active");
  });

  $('.header_catalog_wrap_left li').on('mouseenter', function() {
    var targetId = $(this).data('target');

    $('.header_catalog_wrap_left li').removeClass('active');
    $('.header_catalog_wrap_right_item').removeClass('active');

    $(this).addClass('active');
    $('#' + targetId).addClass('active');
  });

  $(".header_wrap_top_catalog").click(function() {
    $(this).toggleClass("active");
    $(".header_catalog").toggleClass("active");
  });

  $('.main_slider_wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    cssEase: 'linear',
    centerMode: true,
    variableWidth: true,
    arrows: true,
    fade: false,
    prevArrow: $('.main_slider_arrows_prev'),
    nextArrow: $('.main_slider_arrows_next'),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerMode: false,
          variableWidth: false,
          fade: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $(".contacts_nav_wrap_item").click(function() {
    var attr = $(this).attr("data-target");
    $(".contacts_nav_wrap_item").removeClass("active");
    $(this).addClass("active");
    $(".contacts_item").removeClass("active");
    $(`#${attr}`).addClass("active");
  });

  $('.show').on('click', function() {
    const $this = $(this);
    const $input = $this.siblings('input');
    if ($input.attr('type') === 'password') {
      $input.attr('type', 'text');
      $this.addClass('active');
    } else {
      $input.attr('type', 'password');
      $this.removeClass('active');
    }
  });


  $('input[type=tel], input.phone').each(function(){
    $(this)
      .attr('placeholder', '+7 (___) ___-__-__')
      .mask('+7 (000) 000-00-00', {
        autoclear: false
      });
  });

});