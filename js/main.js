$(document).ready(function() {
  "use strict";

  $(".header_wrap_bottom_burger").click(function() {
    $(".drodown").addClass("active");
  });
  
  $(".drodown_top_close").click(function() {
    $(".drodown").removeClass("active");
  });

  $(".back_modal_product").click(function() {
    $(this).removeClass("active");
    $(".product_modal").removeClass("active");
  });

  $(".product_modal_close").click(function() {
    $(".back_modal_product").removeClass("active");
    $(".product_modal").removeClass("active");
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

  $('.upsale').each(function () {
    const $section = $(this);
    const $slider = $section.find('.upsale_slider');
    const $prev = $section.find('.upsale_top_btns_prev');
    const $next = $section.find('.upsale_top_btns_next');

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      cssEase: 'linear',
      arrows: true,
      fade: false,
      prevArrow: $prev,
      nextArrow: $next,
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
  });

  // product

  $('.product_main_left_for_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: $('.product_main_left_for_prev'),
    nextArrow: $('.product_main_left_for_next'),
    asNavFor: '.product_main_left_nav_slider'
  });

  $('.product_main_left_nav_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product_main_left_for_slider',
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: $('.product_main_left_nav_prev'),
    nextArrow: $('.product_main_left_nav_next'),
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 4,
        }
      }
    ]
  });

  // $('.product_main_left_nav_slider').on('mouseenter', '.slick-slide', function() {
  //   const index = $(this).data('slick-index');
  //   $('.product_main_left_for_slider').slick('slickGoTo', index);
  // });

  const $counter = $('.product_main_left_for_counter');
  const $product_main_left_for_slider = $('.product_main_left_for_slider');

  $product_main_left_for_slider.on('init reInit afterChange', function(event, slick, currentSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $counter.text(i + ' / ' + slick.slideCount);
  });

  $product_main_left_for_slider.slick('slickGoTo', 0);

  // product 

  $(".product_tabs_nav_item").click(function() {
    var attr = $(this).attr("data-id");
    $(".product_tabs_nav_item").removeClass("active");
    $(this).addClass("active");
    $(".product_tabs_body_item").removeClass("active");
    $(`#${attr}`).addClass("active");
  });

  $(".about_form_btns_item").click(function() {
    var attr = $(this).attr("data-target");
    $(".about_form_btns_item").removeClass("active");
    $(this).addClass("active");
    $(".about_form_item").removeClass("active");
    $(`#${attr}`).addClass("active");
  });

  $('.product_modal_left_for_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: $('.product_modal_left_for_prev'),
    nextArrow: $('.product_modal_left_for_next')
  });

  const $modalProduct = $('.product_modal_left_for_slider');
  const $modalCounter = $('.product_modal_left_for_counter');

  $modalProduct.on('init reInit afterChange', function (event, slick, currentSlide) {
    // currentSlide может быть undefined при init
    const i = (currentSlide ? currentSlide : 0) + 1;
    $modalCounter.text(i + ' / ' + slick.slideCount);
  });

  function initProductSlider() {
    const $slider = $('.product_assessments_media_slider');
    const slideCount = $slider.find('a').length;

    // Проверяем условия: экран ≤ 991px и слайдов ≥ 8
    if ($(window).width() > 991 && slideCount >= 8) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: $('.product_assessments_media_prev'),
          nextArrow: $('.product_assessments_media_next'),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
        });
      }
    } else {
      // Уничтожаем слайдер, если условия не выполняются
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  }

  initProductSlider();

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