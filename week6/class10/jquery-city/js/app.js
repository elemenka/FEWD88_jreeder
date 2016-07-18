// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$(document).ready(function(){

$('#first').click(swapFirst)

function swapFirst(){
  $('#bigimage').attr('src', 'img/1.jpg')
}

$('#second').click(swapSecond)

function swapSecond(){
  $('#bigimage').attr('src', 'img/2.jpg')
}

$('#third').click(swapThird)

function swapThird(){
  $('#bigimage').attr('src', 'img/3.jpg')
}

$('#fourth').click(swapFourth)

function swapFourth(){
  $('#bigimage').attr('src', 'img/4.jpg')
}

// var currentImage;
// $('.thumb').click(function(){
// 	currentImage = $(this).attr('src');
// 	$('#bigimage').attr('src', currentImage);

});
