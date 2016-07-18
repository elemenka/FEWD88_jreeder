// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: Else if the number of clicks == 10, change the background-color of <body> to green
// 5: Else if the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

$(document).ready(function () {
     
     var count = 0;
     // important to set up variable outside of the function or else it would set the value to zero every time
	
	$('#clickme').click(function(){
		count ++; //(or num = num +1;  ++ is shorthand for +1)
		$('#click-num').text(count); //(could also do .html(count);)
		//var clickNum = parseInt($("#click-num").html());
		//console.log(clickNum)

		if(count ==5){
			$("body").css("background-color", 'red')
		}
		else if(count ===10){
				$("body").css("background-color", 'green')
		}
		else if(count === 15){
				$("body").css("background-color", 'blue')
		}
		else if(count > 15){
				$("body").css("background-color", 'black')
		}
	})

})




