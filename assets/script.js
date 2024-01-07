//using dayjs to make the date dynamic
//using "H" to round by hour, so that the colour blocks can be correctly colour-coded
const today = dayjs().format("[📅]DD/MM/YYYY [🕛] HH:mm");
const theTimeRightNow = dayjs().format("H");

//display today's date below information copy
const todayDateDisplay = document.getElementById("currentDay");
todayDateDisplay.textContent = today;
console.log(today);

//distinguish between past, present and future to allow for colour-coding
$(function () {
    function hourByColour() {
        $(".time-block").each(function () {
            const blockHour = parseInt(this.id);
            $(this).toggleClass("present", blockHour === theTimeRightNow);
            $(this).toggleClass("past", blockHour < theTimeRightNow);
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

    //enforce colour coding
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
});
