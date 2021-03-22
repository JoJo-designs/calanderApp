//setting variables 
var timeSlots = document.querySelector(".container");
var buttonClick = document.querySelectorAll(".saveBtn");
var input = document.querySelectorAll("textarea");


var element;
var thisHour = moment().format("h:mm");
console.log(thisHour)
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

//changes the colour of the background based on the time
function colourTime() {
    //current hour but with only one number
   var currentHour = moment().format("H");


   for (var i = 0; i < input.length; i++) {
       var thisTime = input[i];
        console.log(thisTime)

        //input.classList.remove("past", "future", "present")
        
    if (input.dataset.oneHour < currentHour) {
        elements.classList.add("past");    
    } else if (input.dataset.oneHour > currentHour) {
        elements.classList.add("future");
    } else {
        elements.classList.add("present");
    }
   }
}
colourTime ();

