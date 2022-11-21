// ids

// Moment

// display the date using Moment https://momentjs.com/
var todaysDate = moment().format("dddd, MMMM Do LT");
$("#currentDay").text(todaysDate);

// calendar
var timeNow = moment().format("MMMM Do YYYY");
var displayDate = document.querySelector("currentDay");
displayDate.innerHTML = timeMoment;
var currentHour = moment().format("HH");

// Clear local Storage

//workday 09-17 9am-5pm
// read from local storage
$("#09hr .event-desc").val(localStorage.getItem("09"));


// get


//TODOs