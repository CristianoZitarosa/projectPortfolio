/**
* @description function ready at loading to open/close the side panel.
*/

$(function() {

	let open = $('#open');
	let side = $('.side')
	let close = $('#close')

	open.click(function() {
		side.toggleClass('open');
		open.css('display','none');
	});
	close.click(function() {
		side.removeClass('open');
		open.css('display','initial');
	});

});
