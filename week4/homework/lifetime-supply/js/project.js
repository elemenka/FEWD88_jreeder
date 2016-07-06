// var age = document.getElementById('age');
// var max-age = document.getElementById('max-age');
// var num-per-day = document.getElementById('num-per-day');
// var click-me = document.getElementById('click-me');
// var solution = document.getElementById('solution');
// var item = document.getElementById('item');



document.getElementById('click-me').onclick = calculate;

function calculate () {
	var age = parseInt(document.getElementById('age').value);
	var maxAge = parseInt(document.getElementById('max-age').value);
	var item = document.getElementById('item').value;
	var numPerDay = parseInt(document.getElementById('num-per-day').value);

	var solution = (maxAge - age) * (numPerDay * 365);

	document.getElementById('solution').innerHTML = solution;
	document.getElementById('drink').innerHTML = item;

}