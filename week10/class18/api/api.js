var title = "";

$('#submit').click(function(e){
	title = $('#title').val();
	getMovie(title);
    e.preventDefault();
});

function getMovie(movieName)
{
    
    $.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
         console.log(json.Director); 
          $("#title_output").text(json.Title);
          $("#plot_output").text(json.Plot);
          $("#starring_output").text(json.Actors);
          $("#poster").attr('src', json.Poster);
    });


}



