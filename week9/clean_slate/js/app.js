$( document ).ready(function() {
    console.log( "ready!" );

    var instructions

    

    // function change () {
    // 	$(':button').click = change;
    // 	$('instructions').text('Now scroll to see your chord!');
    // };

     $(":button").click(function(){
        $("#instructions").text("Now scroll to see your chord!");
    });

    //   $(window).scroll(function(){
    //     $("#notes").FadeOut()
    // })



             
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#notes').fadeIn(500);
            } else {
                $('#notes').fadeOut(500);
            }
        });
    });




























