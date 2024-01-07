const localeSettings = {};
  dayjs.locale(localeSettings);

// Color-code each time block based on past, present, and future when the time block is viewed.
//use dayjs to determine if day is today, past or ahead
// Allow a user to enter an event when they click a time block
//click event

// Persist events between refreshes of a page

//using dayjs to make the date dynamic
const theTimeRightNow = dayjs();

//display today's date below information copy
const todayDateDisplay = document.getElementById("currentDay");
todayDateDisplay.textContent = theTimeRightNow;
console.log(theTimeRightNow);

$(function () {
    // // Get the current hour of the day using the dayjs library.
    // const currentHour = dayjs().format('H');
  // The function below changes the color of each time block based on whether it's in the "past, present, or future" relative to the current hour.
    function hourlyColour() {
      $('.time-block').each(function() {
        const blockHour = parseInt(this.id);
        $(this).toggleClass('past', blockHour < theTimeRightNow);
        $(this).toggleClass('present', blockHour === theTimeRightNow);
        $(this).toggleClass('future', blockHour > theTimeRightNow);
      });
    }

    function textEntry() {
        $('.saveBtn').on('click', function() {
          const key = $(this).parent().attr('id');
          const value = $(this).siblings('.description').val();
          localStorage.setItem(key, value);
        });
      }

// const saveEvent

//use .each in jquery

//targeting time blocks by class
// const timeBlockTarget = document.getElementsByClassName("timeblock");

//colour coding

// Save the event in local storage when the save button is clicked in that time block.
// $(".saveBtn").on("click", function () {
//     console.log("saved event");
// });



