$( document ).ready(function() {
    console.log( "ready!" );

var playSound = new Audio()
var chordPlaying = true;

// function updateChord(array,audio,div) {
// //    console.log(div)
// //    $('note').hide();
//    array.forEach(function(note) {
//        console.log(note)
//        $(note).fadeIn(500)
//    })
//    audio.pause()
//    audio.play()

//    $(".majorButton").removeClass("active");
//    $(div).addClass("active");
// }

$("#CM").click(function(){
   var button = $(this)
   var chord = ["#noteEE","#noteG","#noteC","#noteE"]
   playSound = new Audio('js/csharp.mp3')
   updateChord(chord,playSound,this)      
    });


















});