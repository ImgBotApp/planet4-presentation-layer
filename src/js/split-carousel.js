// Index for #carousel-wrapper-header
currentIndexheader = $('#carousel-wrapper-header .carousel-item.active').next('.carousel-item').find('img').attr('src');

$('#carousel-wrapper-header').on('slid.bs.carousel', function () {
  currentIndexheader = $('#carousel-wrapper-header .carousel-item.active').next('.carousel-item');
  var e = currentIndexheader.find('img').attr('src');
  // Last Index
  if(e === 'undefined' || e === undefined) {
    currentIndexheader = $('#carousel-wrapper-header .carousel-item').first('.carousel-item').find('img').attr('src');
  } else {
    currentIndexheader = currentIndexheader.find('img').attr('src');
  }
  $('#carousel-wrapper-header a.carousel-control-next').css('background-image', 'url(' + currentIndexheader + ')');

});

  $('#carousel-wrapper-header a.carousel-control-next').css('background-image', 'url(' + currentIndexheader + ')');
