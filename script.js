var hoursList = {
    hours: ["hour1", "hour2", "hour3", "hour4", "hour5", "hour6", "hour7", "hour8" ], 
}



var timeSlots = document.querySelector(".container");
var buttonClick = document.querySelectorAll(".saveBtn");
var inputArea = document.querySelector(".textArea9");

var element;


console.log(hoursList.hours)

// add the date to the file
var today = moment();
$("#currentDay").text(today.format("ddd MMM Do, YYYY"));

// adds an event listener to the save buttons
timeSlots.addEventListener("click", function(event){
    element = event.target; 
    if (element.matches("button")){
        console.log("A button was clicked");
        collectValue();
    };
});

function collectValue() {
    var text = ("#textArea9").val;
    localStorage.setItem("hour1", JSON.stringify(text))
    console.log(text);
}

function replaceValue() {
    hoursList.hours[0] = (document.getElementById(".textArea9"));
    console.log(hoursList.hours)
  
    localStorage.setItem("place", JSON.stringify(hoursList.hours)) 
    console.log( JSON.parse(hoursList.hours));
    
}