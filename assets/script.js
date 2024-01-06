
//put timeblocks in html
// Color-code each time block based on past, present, and future when the time block is viewed.
//use dayjs to determine if day is today, past or ahead
// Allow a user to enter an event when they click a time block
//click event

// Persist events between refreshes of a page

//using dayjs to make the date dynamic
const todaysDate = dayjs();

//display today's date below information copy
const todayDateDisplay = document.getElementById("currentDay");
todayDateDisplay.textContent = todaysDate;
console.log(todaysDate);



//check Local Storage//
var daysTasks = JSON.parse(localStorage.getItem("workDay"));
if (daysTasks) {
  planWorkday = daysTasks;
}

/* Create rows */
planWorkday.forEach(function(timeBlock, index) {
	var timeLabel = timeBlock.time;
	var blockColour = colorRow(timeLabel);
	var row =
		'<div class="time-block" id="' +
		index +
		'"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		timeLabel +
		'</div><textarea class="form-control ' +
		blockColour +
		'">' +
		timeBlock.event +
		'</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

	/* Adding rows to container div */
	$(".container").append(row);
});

// const saveEvent

//use .each in jquery

//targeting time blocks by class
// const timeBlockTarget = document.getElementsByClassName("timeblock");

//colour coding

// Save the event in local storage when the save button is clicked in that time block.
// $(".saveBtn").on("click", function () {
//     console.log("saved event");
// });

//variable to loop through hours
var theDayToday = [
    {
        index: "0",
        hour: "09",
        time: "09",
        morningOrAfternoon: "am",
        eventAlert: "",
    },
    {
        index: "1",
        hour: "10",
        time: "10",
        morningOrAfternoon: "am",
        eventAlert: "",
    },
    {
        index: "2",
        hour: "11",
        time: "11",
        morningOrAfternoon: "am",
        eventAlert: "",
    },
    {
        index: "3",
        hour: "12",
        time: "12",
        morningOrAfternoon: "pm",
        eventAlert: "",
    },
    {
        index: "4",
        hour: "13",
        time: "13",
        morningOrAfternoon: "pm",
        eventAlert: "",
    },
    {
        index: "5",
        hour: "14",
        time: "14",
        morningOrAfternoon: "pm",
        eventAlert: "",
    },
    {
        index: "6",
        hour: "15",
        time: "15",
        morningOrAfternoon: "pm",
        eventAlert: "",
    },
    {
        index: "7",
        hour: "16",
        time: "16",
        morningOrAfternoon: "pm",
        eventAlert: "",
    },
];
