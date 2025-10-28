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

});