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

//Add an event listener to the save buttons
$(timeSlots).click(function(event){
    element = event.target; 
    if (element.matches("button")){
        console.log("A button was clicked");
        var id = element.dataset.textareaid
        var textArea = document.getElementById(id)
        localStorage.setItem(id, textArea.value)
    }; 
})


//changes the colour of the background based on the time
function colourTime() {
    //current hour
   var currentHour = parseInt(moment().format("HH"));

    //loop thought each time slot
   for (var i = 0; i < input.length; i++) {
       var thisTime = parseInt(input[i].getAttribute("data-oneHour"));
        console.log(thisTime)
        
        // Removes un-needed classesfrom each time slot.
        $(input[i]).removeClass("present past future");  
        
    //checks each hour to and adds the right class.  
    if (thisTime < currentHour) {
        $(input[i]).addClass("past");  
        console.log("this value is in the past")
    } else if (thisTime > currentHour) {
        $(input[i]).addClass("future");
        console.log("this value is in the future")
    } else {
        $(input[i]).addClass("present");
        console.log("this value is right now")
    } 
   }
}


setInterval(colourTime (), (1000 * 60)*5)

