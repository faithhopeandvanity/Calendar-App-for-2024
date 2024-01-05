// The app should:

// Display the current day at the top of the calender when a user opens the planner.
//target currentDay id
// Present time blocks for standard business hours when the user scrolls down.
//put timeblocks in html
// Color-code each time block based on past, present, and future when the time block is viewed.
//use dayjs to determine if day is today, past or ahead
// Allow a user to enter an event when they click a time block
//click event
// Save the event in local storage when the save button is clicked in that time block.

// Persist events between refreshes of a page

const todaysDate = dayjs();

document.getElementById("currentDay", todaysDate);
console.log(todaysDate);