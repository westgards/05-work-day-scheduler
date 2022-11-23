
// time display
var timeForm = $('#time-block');
var timeEvents = $('#hour');


//Event 9am save button
var saveButton09 = document.querySelector('.saveBtn09');
// add event for the ime 
var task09 = document.querySelector('#task09');
// local storage
let addEvents09 = [];
// let savedEvent09 = [];

saveButton09.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("save button 9am");
  // this object stores the time block event
  let addEvent = {
      text: task09.value,
  };

  addEvents09.push(addEvent)
  console.log("events 9am: ", addEvents09);
  localStorage.setItem("addEvents09", JSON.stringify(addEvents09));
});
    
//Event 10am save button
var saveButton10 = document.querySelector('.saveBtn10');
// add event for the ime 
var task10 = document.querySelector('#task10');
// local storage
let addEvents10 = [];
let savedEvent10 = [];

saveButton10.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("save button 10am");
  // this object stores the time block event
  let addEvent = {
      text: task10.value,
  };

  addEvents10.push(addEvent)
  console.log("events 10am: ", addEvents10);
  localStorage.setItem("addEvents10", JSON.stringify(addEvents10));
});


init()

// init function to display time
function init(){
  displayCurrentDate()
}

// Moment
// display the date using Moment https://momentjs.com/
function displayCurrentDate(){
var todaysDate = moment().format("dddd, MMMM Do LT");
$("#currentDay").text(todaysDate);
  }
