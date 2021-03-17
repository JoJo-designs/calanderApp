var timeSlots = document.querySelector(".container");
var buttonClick = document.querySelector(".saveBtn");
var buttonClick = document.querySelector(".textArea9");

timeSlots.addEventListener("click", function(){
    console.log("A button was clicked");
});




var today = moment();
$("#currentDay").text(today.format("ddd MMM Do, YYYY"));