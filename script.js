new Glider(document.querySelector('.slider__list'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: '#resp-dots',
  arrows: {
    prev: '.slider__control--prev',
    next: '.slider__control--next'
  },
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 270,
        duration: 0.25
      }
    },{
      breakpoint: 1920,
      settings: {
        slidesToShow: 'auto',
        slidesToScroll: 1,
        itemWidth: 410,
        duration: 0.25
      }
    }
  ]
});