// let openButton = document.getElementById("aboutus_button_pop_up");
// let popup = document.getElementById("about_pop_up_1_i");
// openButton.addEventListener("click", function () {
//   // popup.style.display = "block";
//   console.log("hello");
// });
document
  .getElementsByClassName("services_wind_1")[0]
  .addEventListener("click", function () {
    window.location.href = "./close_page.html";
  });

let openButton = document.getElementById("button_poster_popup");
let popup = document.getElementById("about_pop_up_1_i");
openButton.addEventListener("click", () => {
  popup.style.display = "block";
  console.log("hello");
});
