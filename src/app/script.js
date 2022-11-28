
// time display
var timeEvents = $('#hour');

// calendar events by the time block
let calendarTimes = ["9am", "10am", "11am", "12pm", "1pm","2pm","3am", "4am", "5am"];


init()

// init function to display time
function init(){
  displayCurrentDate()
  timeColors()
}
// Moment
// display the date using Moment https://momentjs.com/
function displayCurrentDate(){
var todaysDate = moment().format("dddd, MMMM Do LT");
$("#currentDay").text(todaysDate);
  }

  // timeColors function displays which time blocks are past, present & future -css styling
function timeColors() {
  
  var currentTime = moment().format("HH");
  console.log(currentTime)
  
  // textarea id 
  var nine= document.getElementById('09');
  var ten= document.getElementById('10');
  var eleven= document.getElementById('11');
  var tweleve= document.getElementById('12');
  var thriteen= document.getElementById('13');
  var fourteen= document.getElementById('14');
  var fifteen= document.getElementById('15');
  var sixteen= document.getElementById('16');
  var seventeen= document.getElementById('17');

  let textBox = [nine, ten, eleven, tweleve, thriteen,fourteen, fifteen, sixteen, seventeen];

  let textBoxIds = [nine.id ,ten.id , eleven.id , tweleve.id, thriteen.id ,fourteen.id, fifteen.id, sixteen.id, seventeen.id];

  // add a class to to current class list classList.add()
  for (let i = 0; i < textBox.length; i++) {
    if(textBoxIds[i] < currentTime) {
      textBox[i].classList.add('past') // use styling for the past class
    }else if (textBoxIds[i] > currentTime) {
      textBox[i].classList.add('future')
    }else {
      textBox[i].classList.add('present')
    }
  } 
}


// the calendar times
$(document).ready(function(){
  $('.saveBtn').on('click', function() {
    // this is the id for each task
      var description = $(this).siblings('.description').val();
      // this is the id of the parent task
      var time = $(this).parent().attr('id');
      localStorage.setItem(time, description);
  })

 for(let i = 0; i < calendarTimes.length; i++) {
   $(`#${calendarTimes[i]} .description`).val(localStorage.getItem(`${calendarTimes[i]}`));

   }
})
