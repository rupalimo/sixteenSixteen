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

// Archive Tabs
function archiveToggle(evt, tabName) {
	var archiveSection = document.getElementsByClassName('archive__container');
	for (var i = 0; i < archiveSection.length; i++) {
		archiveSection[i].style.display = 'none';
	}

	// Get all elements with class="archiveTab" and remove the class "active"
	archiveTab = document.getElementsByClassName('archiveTab');
	for (i = 0; i < archiveTab.length; i++) {
		archiveTab[i].className = archiveTab[i].className.replace(' active', '');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

document.getElementById('defaultArchive').click();


// Printed Tabs
function printedToggle(evt, tabName) {
	var printedSection = document.getElementsByClassName('printed__container');
	for (var i = 0; i < printedSection.length; i++) {
		printedSection[i].style.display = 'none';
	}

	// Get all elements with class="printedTab" and remove the class "active"
	printedTab = document.getElementsByClassName('printedTab');
	for (i = 0; i < printedTab.length; i++) {
		printedTab[i].className = printedTab[i].className.replace(' active', '');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

document.getElementById('defaultPrinted').click();


// Artists Tabs
function artistsToggle(evt, tabName) {
	var artistsSection = document.getElementsByClassName('artists__container');
	for (var i = 0; i < artistsSection.length; i++) {
		artistsSection[i].style.display = 'none';
	}

	// Get all elements with class="printedTab" and remove the class "active"
	artistsTab = document.getElementsByClassName('artistsTab');
	for (i = 0; i < artistsTab.length; i++) {
		artistsTab[i].className = printedTab[i].className.replace(' active', '');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

document.getElementById('defaultArtists').click();