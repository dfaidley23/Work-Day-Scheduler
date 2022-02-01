// The following line will dictate the time being displayed to the page. I used a setInterval method to fetch the current time and update it on the page every second.
setInterval(() => {
  var currentDay = moment().format("dddd LL  HH:mm:ss:a");
  $("#currentDay").text(currentDay);
}, 1000);

// A variable needed to fetch the time and use it for the next function to assign the color class for the current, past, and future projects time slot.
var now = new Date().getHours();

// The main dynamic function built to take the integers from the HTML and the classes from CSS and apply the colors and required functionality to all of the App in a single function.
function colorAndLocalStorage() {
  for (let i = 9; i < 18; i++) {
    if (now > i) {
      $(`#projectTime${i}`).addClass("past");
    } else if (now == i) {
      $(`#projectTime${i}`).addClass("present");
    } else {
      $(`#projectTime${i}`).addClass("future");
    }

    $(`#projectTime${i}`).val(localStorage.getItem(i));
  }
}

// A dynamic function that makes the Save button save the Key and Value for all of the Save icons within the App
function button(arg) {
  localStorage.setItem(arg, $(`#projectTime${arg}`).val());
}

// A call to the function
colorAndLocalStorage();