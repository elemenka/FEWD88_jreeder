// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// // - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, 
//      respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, 
//      from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to 
//       keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

// $(document).ready(function() {
	

// var a10;

// // $('#a20').click('a20')
// // $('#a30').click('a30')
// // $('#red').click('red')
// // $('#blue').click('blue')
// // $('#n10').click('n10')
// // $('#n20').click('n20')
// // $('#n30').click('n30')

// // $("btn").click(function(){
// 	 // $("p").click(function(){

// 	// $("out")function calculate () {
// 	// 	var count = 0
// 	// 	var a10 = count + 10

// 	$("a10").click(function(){
//         $("#a10").hide();
//     });

	// $("a10").click(function(){
 //        $("#a20").hide();
	// }

// $('.row').click(function(){

// $(this).find('.wrapper').slideToggle('fast');

// });


$(document).ready(function(){

var total = 0;

$('#a10').click(function(){
	total = total + 10;
	$('#out').html(total);
})

$('#a20').click(function(){
	total = total + 20;
	$('#out').html(total);
})

$('#a30').click(function(){
	total = total + 30;
	$('#out').html(total);
})

$('#n10').click(function(){
	total = total - 10;
	$('#out').html(total);
})

$('#n20').click(function(){
	total = total - 20;
	$('#out').html(total);
})

$('#n30').click(function(){
	total = total - 30;
	$('#out').html(total);
})




















});


var out = document.getElementById('out')

document.getElementById('out').onclick = zero;

function zero() {
  document.getElementById('out').innerHTML = 0;
}

var a10 = document.getElementById('a10')

a10.onclick = function(){
	out.innerHTML = parseInt (out.innerHTML) + 10;
}

var a20 = document.getElementById('a20')

a20.onclick = function(){
	out.innerHTML = parseInt (out.innerHTML) + 20;
}

var a30 = document.getElementById('a30')

a30.onclick = function(){
	out.innerHTML = parseInt (out.innerHTML) + 30;
}

var n10 = document.getElementById('n10')

n10.onclick = function(){
	out.innerHTML = parseInt (out.innerHTML) - 10;
}

var n20 = document.getElementById('n20')

n20.onclick = function(){
	out.innerHTML = parseInt (out.innerHTML) - 20;
}

var n30 = document.getElementById('n30')

n30.onclick = function(){
	out.innerHTML = parseInt (out.innerHTML) - 30;
}

var red = document.getElementById("red")

red.onclick = function(){
	 document.getElementById("red").style.backgroundColor = "red";
}

var blue = document.getElementById("blue")

blue.onclick = function(){
	 document.getElementById("blue").style.backgroundColor = "blue";
}

// document.getElementById('out').onclick = clear;

// function clear() {
  
// }

document.getElementById('out').onclick = clearclear;

function clearclear() {
  zero()
  document.getElementById('blue').style.backgroundColor = "white";
  document.getElementById('red').style.backgroundColor = "white";
}






// });