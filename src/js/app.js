//=include libs/jquery.min.js
'use strict';

$( document ).ready(() => {

	const $widgetBtn = $('.widget');
  const delayPopup = 3000;

  setTimeout("document.getElementById('widget').style.display='block'", delayPopup);

  $($widgetBtn).click(function () {
    $('.chat').addClass('is-active');
  });

  const btnClose = $('#close');
  $(btnClose).click(function () {
    $('.chat').removeClass('is-active');
  });


});
