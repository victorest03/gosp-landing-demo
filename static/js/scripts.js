'use strict';

$(document).ready(function () {
	$(".owl").each(function () {
		var xl = $(this).data('xl') || 1;
		var md = $(this).data('md') || 1;
		var lg = $(this).data('lg') || 1;
		var sm = $(this).data('sm') || 1;
		var xs = $(this).data('xs') || 1;
		var items = $(this).data(items) || 1;
		var transition = $(this).data('transition') || 'linear';
		var autoplay = $(this).data('autoplay') ? $(this).data('autoplay') : $(this).find('.item').length > 1 ? true : false;
		var pagination = $(this).data('pagination') ? true : false;
		var navigation = $(this).data('navigation') ? true : false;
		$(this).owlCarousel({
			items: items,
			loop: true,
			nav: navigation,
			dots: pagination,
			autoplay: autoplay,
			slideTransition: transition,
			responsive: {
				0: {
					items: xs
				},
				481: {
					items: sm
				},
				769: {
					items: md
				},
				1281: {
					items: lg
				},
				1601: {
					items: xl || lg
				}
			}
		});
	});

	$(".counter").appear(function () {
		$(this).each(function (index) {
			var $id, $plus, $time, $val, counter, options;
			$id = $(this).attr('id');
			$val = $(this).attr('end-val');
			$time = $(this).attr('time');
			$plus = $(this).attr('plus') || "";
			options = {
				useEasing: true,
				useGrouping: true,
				separator: '',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			counter = new CountUp($id, 0, $val, 0, $time, options);
			counter.start(function () {
				$("#" + $id).prepend($plus);
			});
		});
	});
});
//# sourceMappingURL=scripts.js.map
