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


//   // Index for carousel-wrapper-header
// currentIndexnotheader = $('#carousel-wrapper-not-header .carousel-item.active').next('.carousel-item').find('img').attr('src');

// $('#carousel-wrapper-not-header').on('slid.bs.carousel', function () {
//   currentIndexnotheader = $('#carousel-wrapper-not-header .carousel-item.active').next('.carousel-item');
//   var e = currentIndexnotheader.find('img').attr('src');
//   // Last Index
//   if(e === 'undefined' || e === undefined) {
//     currentIndexnotheader = $('#carousel-wrapper-not-header .carousel-item').first('.carousel-item').find('img').attr('src');
//   } else {
//     currentIndexnotheader = currentIndexnotheader.find('img').attr('src');
//   }
//   $('#carousel-wrapper-not-header a.carousel-control-next').css('background-image', 'url(' + currentIndexnotheader + ')');

// });

//   $('#carousel-wrapper-not-header a.carousel-control-next').css('background-image', 'url(' + currentIndexnotheader + ')');