$(function () {
  var window_size = window.matchMedia('(max-width: 820px)');

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrow-left" src="../images/slider-arrow-previous.svg" alt="arrow-previous">',
    nextArrow: '<img class="slider-arrow-right" src="../images/slider-arrow-next.svg" alt="arrow-next">',
    asNavFor: '.slideshow',
  });

  $('.slideshow').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: false,
    focusOnSelect: true,
    variableWidth: true,
    asNavFor: '.slider__inner',
    responsive: [
      {
        breakpoint: 961,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          arrows: false,
        }
      },
      {
        breakpoint: 820,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: 'unslick'
      },
    ]
    
  });

  $('.menu__btn').on('click', function () {
    $('.menu').slideToggle();
  });


  /* Пытался перенести текст в нижний слайдер,
  но не получилось синхронизировать каждый
  текст без внесения дополнительных классов.
  Потом помучаюсь. */
  /* var one = $('.slider__text').html(),
      two = $('.slideshow__item').html();


  if (window.matchMedia('(max-width: 820px)').matches) {

    $('.slider__text').html('');
    $('.slideshow__item').html(one);
    
  }; */
  
});