/**
 * @file
 * CKEditor Read more functionality.
 */

(function ($) {
	'use strict';

	var $ckeditorReadmore = $('.ckeditor-readmore');

	var type = $ckeditorReadmore.data('readmore-type');
	var more_text = $ckeditorReadmore.data('readmore-more-text').length > 0 ? $ckeditorReadmore.data('readmore-more-text') : readmore_less_text;
	var less_text = $ckeditorReadmore.data('readmore-less-text').length > 0 ? $ckeditorReadmore.data('readmore-less-text') : readmore_more_text;

	if ($ckeditorReadmore.length > 0) {
		var $ckeditorReadmoreParent = $ckeditorReadmore
		  .once()
		  .wrap('<div class="ckeditor-readmore-wrapper"></div>')
		  .parent();

		if (type === 'button') {
		  $ckeditorReadmoreParent.append('<button class="ckeditor-readmore-toggler">'+more_text+'</button>');
		} else {
		  $ckeditorReadmoreParent.append('<a class="ckeditor-readmore-toggler" href="#">'+more_text+'</a>');
		}
		$('.ckeditor-readmore-toggler').once().on('click', function (event) {
		  event.preventDefault();
		  $(this).blur();

		  var $element = $(this).prev();

		  //get element display before toggling
		  if ($element.css('display') === 'none') {
			$(this).html(less_text);
		  } else {
			$(this).html(more_text);
		  }

		  $element.slideToggle();
		});
	}
})(jQuery);
