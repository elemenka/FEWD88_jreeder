$(document).ready(function(){

$('.box').css('background-color', 'blue');
$('.box').css('color', 'white');

$('.box').html('sup' + ' ' + 'hello' + ' ' + 'hello' +  ' ' + 'hello');

// $('#one').click(function(){
// $('#one').height(500px);
// })

// $('#one').click(function(){
//     $('#one').animate({height:'500px'});
//     $('#one').animate({width:'500px'});
// });

$('#two').click(function(){
    $('#two').animate({height:'500px'});
    $('#two').animate({width:'500px'});
});

$('#one').click(function(){
    $('#one').css({ 'height' : '+=100px' });
    $('#one').css({ 'width' : '+=100px' });
});















});