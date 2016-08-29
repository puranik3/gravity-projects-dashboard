(function() {
	window.addEventListener( 'load', function() {
		document.getElementsByTagName( 'button' )[0].addEventListener( 'click', function() {
			window.alert( document.title );
		});
	});
}());