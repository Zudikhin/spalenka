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

  $('.slider_collection_block_wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplaySpeed: 5000,
    infinite: true,
    cssEase: 'linear',
    arrows: true,
    fade: false,
    prevArrow: $('.slider_collection_block_text_arrows_prev'),
    nextArrow: $('.slider_collection_block_text_arrows_next'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.about_team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    arrows: true,
    fade: false,
    prevArrow: $('.about_team_wrap_arrows_prev'),
    nextArrow: $('.about_team_wrap_arrows_next'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.upsale_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    arrows: true,
    fade: false,
    prevArrow: $('.upsale_top_btns_prev'),
    nextArrow: $('.upsale_top_btns_next'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".about_form_btns_item").click(function() {
    var attr = $(this).attr("data-target");
    $(".about_form_btns_item").removeClass("active");
    $(this).addClass("active");
    $(".about_form_item").removeClass("active");
    $(`#${attr}`).addClass("active");
  });

  $('[data-fancybox="collection"]').fancybox({
    loop: true,               // зацикливает просмотр
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close"
    ],
    animationEffect: "zoom",  // эффект анимации
    transitionEffect: "fade"  // плавное переключение
  });

  $('[data-fancybox="sertif"]').fancybox({
    loop: true,               // зацикливает просмотр
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close"
    ],
    animationEffect: "zoom",  // эффект анимации
    transitionEffect: "fade"  // плавное переключение
  });

  $('input[type=tel], input.phone').each(function(){
    $(this)
      .attr('placeholder', '+7 (___) ___-__-__')
      .mask('+7 (000) 000-00-00', {
        autoclear: false
      });
  });

});