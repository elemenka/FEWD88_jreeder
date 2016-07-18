// 1. Use document.getElementById() and attach an .onclick event handler to #clickme
// 2. Assign this event handler to a function named tellFortune
// 3. The function ellFortune should:
// - A) store the values from the four inputs (#hometown, #partner, #favNum, #jobTitle) in variables
// - B) concatenate these variables into the sentence:
// - "You will be a " + jobTitle + " living in " + hometown + " married to " + partner + " with " + favNum + " kids."
// - C) output this string to #output

document.getElementById("clickme").onclick = fortuneTell

function fortuneTell (){
var hometown = document.getElementById('hometown').value;
var partner = document.getElementById('partner').value;
var favNum = document.getElementById('favNum').value;
var jobTitle = document.getElementById('jobTitle').value;

document.getElementById("output").innerHTML = output;

// var output = "You will be a (" + JobTitle + "living in" + hometown + " married to" + partner + "with" + favNum + "kids" + )";


// document.getElementById("output").innerHTML = output;
}