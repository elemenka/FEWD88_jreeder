$( document ).ready(function() {
    console.log( "ready!" );

    var instructions

    

    // function change () {
    // 	$(':button').click = change;
    // 	$('instructions').text('Now scroll to see your chord!');
    // };

     // $(":button").click(function(){
        // $("#instructions").text("Now scroll to see your chord!");
    // });

    //   $(window).scroll(function(){
    //     $("#notes").FadeOut()
    // })



             
    //     $(window).scroll(function(){                          
    //         if ($(this).scrollTop() < 1) {
    //             $('#notes').fadeIn(500);
    //         } else {
    //             $('#notes').fadeOut(500);
    //         }
    //     });
    // });

// key button state changes

 // $("#CM").click(function(){
        // $("#CM").css("background-color", "red");
    // });

$("#resetButton").click(function(){
        location.reload();

});

 // var audio = $("#mysoundclip")[0];
 //      console.log(audio);
 //  $("CM").click(function() {
 //      audio.play();
 //  });


$("#CM").click(function(){
        // var audio = $("#mysoundclip") [0]
        // location.reload();
        // event.preventDefault();
        $('#mysoundclip')[0].play()
        $("#noteA").fadeIn(500);
        $("#noteC").fadeIn(1000);
        $("#noteE").fadeIn(1500);
        $("#CM").css("background-color", "white");
        $("#CM").css("color", "pink");
       
        //  location.reload();
        
     });

$("#GM").click(function(){
        $("#noteG").show();
        $("#noteB").show();
        $("#noteD").show();
        $("#Fsharp").show();
        $("#GM").css("background-color", "red");

      });

$("#DM").click(function(){
        $("#noteDD").show();
        $("#noteFF").show();
        $("#noteA").show();
        $("#noteD").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#DM").css("background-color", "red");

      });

$("#AM").click(function(){
        $("#noteA").show();
        $("#noteC").show();
        $("#noteE").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#Gsharp").show();
        $("#AM").css("background-color", "red");

      });

$("#EM").click(function(){
        $("#noteEE").show();
        $("#noteG").show();
        $("#noteB").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#Gsharp").show();
        $("#Dsharp").show();
        $("#EM").css("background-color", "red");

      });

$("#BM").click(function(){
        $("#noteB").show();
        $("#noteD").show();
        $("#noteF").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#Gsharp").show();
        $("#Dsharp").show();
        $("#Asharp").show();
        $("#BM").css("background-color", "red");


      });

$("#FsharpMajor").click(function(){
        $("#noteFF").show();
        $("#noteA").show();
        $("#noteC").show();
        $("#noteF").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#Gsharp").show();
        $("#Dsharp").show();
        $("#Asharp").show();
        $("#Esharp").show();
        $("#FsharpMajor").css("background-color", "red");


      });

$("#G♭M").click(function(){
        $("#noteG").show();
        $("#noteB").show();
        $("#noteD").show();
        $("#Bflat").show();
        $("#Eflat").show();
        $("#Aflat").show();
        $("#Dflat").show();
        $("#Gflat").show();
        $("#Cflat").show();
        $("#G♭M").css("background-color", "red");

 });

$("#D♭M").click(function(){
        $("#noteDD").show();
        $("#noteFF").show();
        $("#noteF").show();
        $("#noteA").show();
        $("#noteD").show();
        $("#Bflat").show();
        $("#Eflat").show();
        $("#Aflat").show();
        $("#Dflat").show();
        $("#Gflat").show();
        $("#D♭M").css("background-color", "red");


      });

$("#A♭M").click(function(){
        $("#noteA").show();
        $("#noteC").show();
        $("#noteE").show();
        $("#Bflat").show();
        $("#Eflat").show();
        $("#Aflat").show();
        $("#Dflat").show();
        $("#A♭M").css("background-color", "red");
       
      });

$("#E♭M").click(function(){
        $("#noteEE").show();
        $("#noteG").show();
        $("#noteB").show();
        $("#noteE").show();
        $("#Bflat").show();
        $("#Eflat").show();
        $("#Aflat").show();
        $("#E♭M").css("background-color", "red");
       
      });

$("#B♭M").click(function(){
        $("#noteB").show();
        $("#noteD").show();
        $("#noteF").show();
        $("#Bflat").show();
        $("#Eflat").show();
        $("#B♭M").css("background-color", "red");
       
      });

$("#FM").click(function(){
        $("#noteFF").show();
        $("#noteA").show();
        $("#noteC").show();
        $("#noteE").show();
        $("#Bflat").show();
        $("#FM").css("background-color", "red");
       
      });





// $('#CM').click(function(){

// $(this).find('#noteA').toggle('fast');

// });

});



























