$(document).ready(function(){
	var count;
	var string = "";
	for(count = 1; count <= 100; count++) {
		string = string + '<p>';

		if(count % 3 == 0 || count % 5 == 0) {
			if(count % 3 == 0) {
				string = string + "fizz ";
			}
			if(count % 5 == 0) {
				string = string + "buzz";
			}
		}
		else {
			string = string + count;
		}
		string = string + '</p>';
	}
	$('body').html(string);
});