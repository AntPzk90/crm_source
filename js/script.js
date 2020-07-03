//переключение раскладки (ряды плитка)
let rowBtn = $('.controls__row-btn');
let tileBtn = $('.controls__tile-btn');
rowBtn.click(function(evt) {
  evt.preventDefault();
  switchActiveClass();
});

tileBtn.click(function(evt) {
  evt.preventDefault();
  switchActiveClass();
});

function switchActiveClass () {
  if (rowBtn.hasClass('controls__btn--active')) {
    rowBtn.removeClass('controls__btn--active');
    tileBtn.addClass('controls__btn--active');
    if(!$('.mapping').hasClass('mapping--tile')){
      $('.mapping').addClass('mapping--tile');
    }
  } else if(tileBtn.hasClass('controls__btn--active')) {
    tileBtn.removeClass('controls__btn--active');
    rowBtn.addClass('controls__btn--active');
    if($('.mapping').hasClass('mapping--tile')) {
      $('.mapping').removeClass('mapping--tile');
    }
  }
}

// появление overlay

function addOverlay () {

  let html = '<div class="overlay"></div>';
  $('body').append(html);
  $('body').css('overflow', 'hidden');

  function removerOverlay () {
    $('.overlay').remove();
    $('body').removeAttr('style');
  }

  $('.overlay').click(function () {
    $('.popup').fadeOut();
    removerOverlay();
  });
}

function removerOverlay () {
  $('.overlay').remove();
  $('body').removeAttr('style');
}

// появление попапа "добавление задачи"

let addNewprojectBtn = $('.controls__add-btn');
let popupCloseBtn = $('.popup__btn-close');

addNewprojectBtn.click(function (evt) {
  evt.preventDefault();
  $('.add-new-project').fadeIn();
  addOverlay();
});

popupCloseBtn.click(function (evt) {
  removerOverlay();
  $(this).parent().fadeOut();
});

// Появление попапа "Настройка полей"

$('.controls__fields-setting').click(function (evt) {
  $('.field-settings').fadeIn();
  addOverlay();
});

// календарь (datepicker/ jquery UI)

$.datepicker.setDefaults({
  changeMonth: true,
  changeYear: true
});
$('#datepicker').datepicker();
$('#datepicker-final').datepicker();

$('#ui-datepicker-div').click( function () {
  if($('#ui-datepicker-div')) {
    $('#ui-datepicker-div').css('z-index', '1100');
  }
});

// выпадающий список реалтзация с помощью библиотеки (https://s-sd.ru/blog_studio_design/stilizaciya_vypadayuwego_spiska_dlya_sajta/)

$('.form__select').each(function (index) {

  $(this).dropdown( {
    gutter : 1,
  } );
});
// добавление а разметку спана с голубым текстом для выпадающих списков
// автоматическое добавление <span class="cd-dropdown__blue-txt"> после "/"
$('.cd-dropdown ul li span').each(function () {
  let text = $(this).text().split("/");
  if (text.length >= 2) {
    $(this).text('');
    let spanBlueColor = ' / <span class="cd-dropdown__blue-txt">'+ text[1] +'</span>';
    let node = text[0] + spanBlueColor;
    $(this).append(node);
  }
});


