$(function() {
  $('li.article-mobile-view').css('cursor', 'pointer').click(function() {
    window.location.href = "#";
    return false;
    });
});
  $(document).ready(function() {
    $(".step-info-wrap").click(function(){
    if($(this).parent().hasClass('active')){
      $(this).parent().removeClass('active');
      }
    else {
      $('.col').removeClass('active');
      $(this).parent().addClass('active');
      }
  });
});

//   $(document).ready(function() {
//     $(".steps-action").hide();
//     $(".step-info-wrap").click(function(){
//     if($(this).parent().hasClass('active')){
//       $(this).parent().removeClass('active');
//        $(this).find(".steps-action").slideUp();
//        $(".steps-action").slideUp();
//       }
//     else {
//       $('.col-lg-3').removeClass('active');
//       $(this).parent().addClass('active');
//        $(".steps-action").slideUp();
//        $(this).find(".steps-action").slideDown();
//       }
//   });
// });
function createCookie(name,value,days) {
  console.log('in create cookie method');
  document.cookie = encodeURI(name) + '=' + encodeURI(value) + ';domain=.' + document.domain + ';path=/;';
}

function readCookie(name) {
  console.log('in read cookie method');  
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

$(function() {
  cookie = readCookie('greenpeace');
  if (cookie == null) {
    console.log('cookie is not present')
    $(".cookie-block").show();
  } else {
    console.log('cookie is present, cookie banner hidden!');
  }
});

$("#hidecookie").click(function () {
  $(".cookie-block").slideUp("slow");
  createCookie('greenpeace', 'policy-accepted');
});

$('.country-select-dropdown').click(function(){
  $(this).parent().toggleClass('active-li');
  $('.country-select-box').toggle();
});

$('.country-select-box .country-list li').click(function(){
  $(this).parents('.country-select-box').find('li').removeClass('active');
  $(this).addClass('active');
});

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 130){  
  //       $('.fixed-element, .md-navigation').addClass("sticky");
  //   }
  //   else{
  //       $('.fixed-element, .md-navigation').removeClass("sticky");
  //   }
  // });
// Footer JS goes in this
// Header JS goes in this.

// Returns width of browser viewport
if($( window ).width() >= 768) {
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 130){  
  //       $('.fixed-element, .md-navigation').addClass("sticky");
  //   }
  //   else{
  //       $('.fixed-element, .md-navigation').removeClass("sticky");
  //   }
  // });
};

// Hide Header on on scroll down
if($( window ).width() <= 768) {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.top-navigation').outerHeight();
  $(window).scroll(function(event){
      didScroll = true;
  });
  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);
  function hasScrolled() {
      var st = $(this).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      if (st > lastScrollTop && st > navbarHeight){
          $('.top-navigation').removeClass('nav-down').addClass('nav-up');
      } else {
          if(st + $(window).height() < $(document).height()) {
              $('.top-navigation').removeClass('nav-up').addClass('nav-down');
          }
      }
      lastScrollTop = st;
  }
  var $slider = $('.mobile-menus');
  $(document).click(function() {
    if($('.menu').hasClass('active')){
    //Hide the menus if visible
    $slider.animate({
      left: parseInt($slider.css('left'),10) == 0 ?
       -320 : 0
    });
    $('.menu').removeClass('active');
    }
    if($('.search-box').hasClass('active')){
    //Hide the search if visible
    $searchBox.slideToggle().toggleClass('active');;
    }
  });

  $('.menu').click(function() {
    event.stopPropagation();
    $(this).toggleClass('active');
    $slider.animate({
      left: parseInt($slider.css('left'),10) == -320 ?
       0 : -320
    });
  });

  var $searchBox = $('#search .search-box');
  var $searchTrigger = $('#search-trigger');

  $searchTrigger.on('click', function(e) {
    event.stopPropagation();
      $searchBox.slideToggle().toggleClass('active');
  });
};
$(function() {
	$( '#search-type button' ).click( function () {
		$( '#search-type button' ).removeClass( 'active' );
		$( this ).addClass( 'active' );
	} );

	$( '.btn-filter' ).click( function() {
		$( '#filtermodal' ).modal( 'show' );
	} );

	// Submit form on Sort change event.
	$( '#select_order' ).on( 'change', function () {
		$( '#orderby', $( '#search_form' ) ).val( $(this).val() ).parent().submit();
		return false;
	} );

	// Submit form on Filter click event or on Apply button click event.
	$( 'input[name^=\'f[\']:not(.modal-checkbox), .applybtn' ).off( 'click' ).on( 'click', function () {
		$( '#search_form' ).submit();
	} );

	// Add all selected filters to the form submit.
	$( '#search_form' ).on( 'submit', function () {
		var form = $( this );

		if ( $('.filter-modal.show').length === 0 ) {
			$( 'input[name^=\'f[\']:not(.modal-checkbox):checked').each( function () {
				form.append( $( this ).clone( true ) );
			});
		} else {
			$('input[name^=\'f[\'].modal-checkbox:checked').each( function () {
				form.append( $( this ).clone( true ) );
			});
		}
	} );

	// Add filter by clicking on the page type label inside a result item.
	$( '.search-result-item-head' ).off( 'click' ).on( 'click', function () {
		$( '.custom-control-input[value=' + $( this ).data( 'term_id' ) + ']' ).prop( 'checked', true);
		$( '#search_form' ).submit();
	} );

	// Clear single selected filter.
	$( '.activefilter-tag' ).off( 'click' ).on( 'click', function () {
		$( '.custom-control-input[value=' + $( this ).data( 'id' ) + ']' ).prop('checked', false );
		$( '#search_form' ).submit();
	} );

	// Clear all selected filters.
	$( '.clearall' ).off( 'click' ).on( 'click', function () {
		$( 'input[name^=\'f[\']' ).prop( 'checked', false );
		$( '#search_form' ).submit();
	} );

	// Add click event for load more button in blocks.
	$( '.btn-load-more' ).off( 'click' ).on( 'click', function () {
		var button = $( this );
		var row = $( '.row-hidden', button.closest( '.container' ) );

		if ( 1 === row.size() ) {
			button.closest( '.load-more-button-div' ).hide( 'fast' );
		}
		row.first().show( 'fast' ).removeClass('row-hidden');
	} );

	// Reveal more results just by scrolling down the first 2 times.
	$( window ).scroll( function() {
		var load_more_button = $( '.btn-load-more' );
		var element_top      = load_more_button.offset().top,
			element_height   = load_more_button.outerHeight(),
			window_height    = $( window ).height(),
			window_scroll    = $( this ).scrollTop();

		if ( window_scroll > ( element_top + element_height - window_height ) ) {
			load_more_count++;
			if ( load_more_count <= 2 ) {
				load_more_button.click();
			}
			return false;
		}
	} );
} );

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


  // Index for carousel-wrapper-header
currentIndexnotheader = $('#carousel-wrapper-not-header .carousel-item.active').next('.carousel-item').find('img').attr('src');

$('#carousel-wrapper-not-header').on('slid.bs.carousel', function () {
  currentIndexnotheader = $('#carousel-wrapper-not-header .carousel-item.active').next('.carousel-item');
  var e = currentIndexnotheader.find('img').attr('src');
  // Last Index
  if(e === 'undefined' || e === undefined) {
    currentIndexnotheader = $('#carousel-wrapper-not-header .carousel-item').first('.carousel-item').find('img').attr('src');
  } else {
    currentIndexnotheader = currentIndexnotheader.find('img').attr('src');
  }
  $('#carousel-wrapper-not-header a.carousel-control-next').css('background-image', 'url(' + currentIndexnotheader + ')');

});

  $('#carousel-wrapper-not-header a.carousel-control-next').css('background-image', 'url(' + currentIndexnotheader + ')');
