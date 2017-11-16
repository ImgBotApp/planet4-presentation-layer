// First Index
currentIndex = $('.carousel-item.active').next('.carousel-item').find('img').attr('src');

$('#carousel-wrapper').on('slid.bs.carousel', function () {
  currentIndex = $('.carousel-item.active').next('.carousel-item');
  var e = currentIndex.find('img').attr('src');
  // Last Index
  if(e === 'undefined' || e === undefined) {
    currentIndex = $('.carousel-item').first('.carousel-item').find('img').attr('src');
  } else {
    currentIndex = currentIndex.find('img').attr('src');
  }
  $('.split-carousel-wrap a.carousel-control-next').css('background-image', 'url(' + currentIndex + ')');

});

  $('.split-carousel-wrap a.carousel-control-next').css('background-image', 'url(' + currentIndex + ')');