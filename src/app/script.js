
// time display
// var time = $('#time-block');
var timeEvents = $('#hour');

// calendar events by the time block
// let calendarEvents = ["9", "10", "11","12","13","14","15", "16", "17"];

let calendarTimes = ["9am", "10am", "11am", "12pm", "1pm","2pm","3am", "4am", "5am"];


init()

// init function to display time
function init(){
  displayCurrentDate()
  // timeColors()
}
// Moment
// display the date using Moment https://momentjs.com/
function displayCurrentDate(){
var todaysDate = moment().format("dddd, MMMM Do LT");
$("#currentDay").text(todaysDate);
  }

  // time block colors
// function timeColors() {
//   //
//   var currentTime = moment().format("HH");
//   var nine= document.getElementById('09').id;
//   console.log(nine)
//   console.log(currentTime)
//   // add a class to to current class list classList.add()



// the calendar times
$(document).ready(function(){
  $('.saveBtn').on('click', function() {
    // this is the id for each task
      var description = $(this).siblings('.description').val();
      // this is the id of the parent task
      var time = $(this).parent().attr('id');
// 
      localStorage.setItem(time, description);
  })

  // calendarEvents.forEach(id => {
  //     $(`#${id} .description`).val(localStorage.getItem(`${id}`));
  // });

 for(let i = 0; i < calendarTimes.length; i++) {
   $(`#${calendarTimes[i]} .description`).val(localStorage.getItem(`${calendarTimes[i]}`));

   }

})




// //Event 9am save button
// var saveButton09 = document.querySelector('.saveBtn09');
// // add event for the ime 
// var task09 = document.querySelector('#task09');
// // local storage
// let addEvents09 = [];
// // let savedEvent09 = [];

// saveButton09.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("save button 9am");
//   // this object stores the time block event
//   let addEvent = {
//       text: task09.value,
//   };

//   addEvents09.push(addEvent)
//   console.log("events 9am: ", addEvents09);
//   localStorage.setItem("addEvents09", JSON.stringify(addEvents09));
// });
    
// //Event 10am save button
// var saveButton10 = document.querySelector('.saveBtn10');
// // add event for the ime 
// var task10 = document.querySelector('#task10');
// // local storage
// let addEvents10 = [];
// let savedEvent10 = [];

// saveButton10.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("save button 10am");
//   // this object stores the time block event
//   let addEvent = {
//       text: task10.value,
//   };

//   addEvents10.push(addEvent)
//   console.log("events 10am: ", addEvents10);
//   localStorage.setItem("addEvents10", JSON.stringify(addEvents10));
// });



