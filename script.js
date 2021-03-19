//setting variables 
var hoursList = {
    hours: ["hour1", "hour2", "hour3", "hour4", "hour5", "hour6", "hour7", "hour8" ], 
}

var timeSlots = document.querySelector(".container");
var buttonClick = document.querySelectorAll(".saveBtn");
var inputArea = document.querySelector(".textArea9");

var element;

//log the array in the hoursList object
console.log(hoursList.hours)

// adding the date to the file
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

// function to catch the value entered into the text area
function collectValue() {
    var input = document.getElementById('textArea9');
    console.log(input.value); 
    hoursList.hours[0] = input.value;
    console.log(hoursList.hours)
    localStorage.setItem("hours", JSON.stringify(hoursList.hours))

};

function replaceValue() {
    localStorage.getItem("hours")
    inputArea.innerHTML = JSON.parse(hoursList.hours[0])
}


