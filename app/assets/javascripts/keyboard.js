// Note: $(() => {}); is equivalent to $(document).ready(function(){})

$(document).ready(function(){	

	var write = $('#write');

	$('#kcontainer .key').click(function(){
		var write = $('#write');
		var key = $(this),
			character = key.html(); 
		
		// Delete
		if (key.hasClass('key key-wide')) {
			var html = write.html();
			
			write.html(html.substr(0, html.length - 1));
			return false;
		}
		
		if (key.hasClass('key-space')) character = ' ';
		
		if (key.hasClass('key-special key-wide')) character = "\n";
		
		// Add the character
		
		write.html(write.html() + character+'hola');
		
	});
});