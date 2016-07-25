$(document).ready(function () {
	
	$('#myForm').submit(function(event){
		var name = $('#name-input').val();
		$('#target').text(name);
		console.log(event.target.id);
		event.preventDefault();
		$('#name-input').val("");


	});

})
