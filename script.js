$(document).ready(function () {
	$('.page-toggle').on('change', function () {
		var selectedClass = $(this).find(':selected').attr('data-show');

		// Hide all sections and show only the selected one
		$('.page-section').hide();
		$(selectedClass).fadeIn();
	});

	$('.page-section').hide();
	$('.page-toggle option:selected').each(function () {
		var selectedClass = $(this).attr('data-show');
		$(selectedClass).show();
	});
});
