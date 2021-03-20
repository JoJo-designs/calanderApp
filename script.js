//setting variables 
var timeSlots = document.querySelector(".container");
var buttonClick = document.querySelectorAll(".saveBtn");
var input = document.querySelectorAll("textarea");

var element;
var currentHour = moment().format("hh mm");
var pastHour;
var thisHour = moment().format("hh mm");
var nextHour;


//log the array in the hoursList object
console.log(input)
// adding the date to the file
var today = moment();
$("#currentDay").text(today.format("ddd MMM Do, YYYY"));

// loop the hours to select items from local storge
input.forEach(function (hour) {
    hour.value = localStorage.getItem(hour.id)
    })

//can get rid of console logs
// adds an event listener to the save buttons
timeSlots.addEventListener("click", function(event){
    element = event.target; 
    if (element.matches("button")){
        console.log("A button was clicked");
        var id = element.dataset.textareaid
        var textArea = document.getElementById(id)
        localStorage.setItem(id, textArea.value)
    }; 
});

console.log(thisHour)

//function colorChange() {
   // if (thisHour === currentHour){
       // input.setAttribute("background: yellow")
   // }
//}

//colorChange ();
