// The following line will dictate the time being displayed to the page. I used a setInterval method to fetch the current time and update it on the pageevery second.
setInterval(() => {
  var currentDay = moment().format("dddd LL  HH:mm:ss:a");
  $("#currentDay").text(currentDay);
}, 1000);

var now = new Date().getHours();

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

function button(arg) {
  localStorage.setItem(arg, $(`#projectTime${arg}`).val());
}

colorAndLocalStorage();