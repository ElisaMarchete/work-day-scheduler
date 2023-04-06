// Assigning classes and ids
let timeBlock = $(".time-block");
let timeDisplayEl = $("#currentDay");
let textArea = $(".description");
let btnSave = $(".saveBtn");

// Get the local Storage saved input
let savedText = localStorage.getItem("Input");
// parse data from localstorage
let savedData = JSON.parse(savedText);
// save the contents saved in the local storage in each time slot
if (savedData !== null) {
  textArea.each(function (index) {
    $(this).val(savedData[index]);
  });
}

// THE FOR BELOW IS THE SAME AS .EACH ABOVE
// for (let i = 0; i < savedData.length; i++) {
//   const element = savedData[i];
//   textArea[i].val(element)
// }

// Displaying the time
function displayTime() {
  let rightNow = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000); //60 *

// Get the current hour linked with the if statement below
let hour = dayjs().format("HH");

// get the current hour from id
for (let i = 0; i < timeBlock.length; i++) {
  let element = timeBlock[i];
  let elementSplit = element.id.split("-")[1];

  element.classList.remove("past", "present", "future");

  // Compare the current hour with the element hour
  if (elementSplit < hour) {
    // Add a class for past time
    element.classList.add("past");
  } else if (elementSplit == hour) {
    // Add a class for present time
    element.classList.add("present");
  } else {
    // Add a class for future time
    element.classList.add("future");
  }
}

function inputstorage(event) {
  event.preventDefault();
  // Initialize an empty array to hold the textarea values
  var textValues = [];
  // Loop through all textareas with class "description"
  $(".description").each(function () {
    // Get the value of the current textarea
    var value = $(this).val();
    // Add the value to the array
    textValues.push(value);
  });

  let string = JSON.stringify(textValues);
  localStorage.setItem("Input", string);
}

btnSave.on("click", inputstorage);

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
