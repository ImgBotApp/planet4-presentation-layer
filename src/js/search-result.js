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
