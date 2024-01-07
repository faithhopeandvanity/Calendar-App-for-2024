const localeSettings = {};
dayjs.locale(localeSettings);

// Color-code each time block based on past, present, and future when the time block is viewed.
//use dayjs to determine if day is today, past or ahead
// Allow a user to enter an event when they click a time block
//click event

// Persist events between refreshes of a page

//using dayjs to make the date dynamic
//using "H" to round by hour, so that the colour blocks can be correctly colour-coded
const today = dayjs();
const theTimeRightNow = dayjs().format("H");

//display today's date below information copy
const todayDateDisplay = document.getElementById("currentDay");
todayDateDisplay.textContent = today;
console.log(today);

//colour-code time slots
$(function () {
    function hourByColour() {
        $(".time-block").each(function () {
            const blockHour = parseInt(this.id);
            $(this).toggleClass("past", blockHour < theTimeRightNow);
            $(this).toggleClass("present", blockHour === theTimeRightNow);
            $(this).toggleClass("future", blockHour > theTimeRightNow);
        });
    }

    //listen for a click on the save button to save the input to storage
    function enterEvent() {
        $(".saveBtn").on("click", function () {
            const key = $(this).parent().attr("id");
            const value = $(this).siblings(".description").val();
            localStorage.setItem(key, value);
        });
    }

    //refresh colour coding
    function refreshColour() {
        $(".time-block").each(function () {
            const blockHour = parseInt(this.id);
            if (blockHour == theTimeRightNow) {
                $(this).removeClass("past future").addClass("present");
            } else if (blockHour < theTimeRightNow) {
                $(this).removeClass("future present").addClass("past");
            } else {
                $(this).removeClass("past present").addClass("future");
            }
        });
    }

    $(".time-block").each(function () {
        const key = $(this).attr("id");
        const value = localStorage.getItem(key);
        $(this).children(".description").val(value);
    });
    //run the functions
    hourByColour();
    enterEvent();
    refreshColour();
    //set interval to 1000, so that the display would change every second.
    setInterval(updateTime, 1000);
});
