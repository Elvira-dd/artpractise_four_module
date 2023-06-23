// let openButton = document.getElementById("button_poster_popup");
// let popup = document.getElementById("about_pop_up_1_i");
// openButton.addEventListener("click", () => {
//   popup.style.display = "block";
//   console.log("hello");
// });
// INDEX>HTML
function handleResize() {
  var screenWidth = window.innerWidth;
  var targetWidth = 600;

  if (screenWidth > targetWidth) {
    setTimeout(() => {
      document.getElementById("index_pop_up_1").style.display = "block";
    }, 1000);
    setTimeout(() => {
      document.getElementById("index_pop_up_2").style.display = "block";
    }, 1500);
    setTimeout(() => {
      document.getElementById("index_pop_up_3").style.display = "block";
    }, 2500);
    setTimeout(() => {
      document.getElementById("index_pop_up_4").style.display = "block";
    }, 1000);
    setTimeout(() => {
      document.getElementById("index_pop_up_5").style.display = "block";
    }, 3000);
    setTimeout(() => {
      document.getElementById("index_pop_up_6").style.display = "block";
    }, 1500);
    setTimeout(() => {
      document.getElementById("index_pop_up_7").style.display = "block";
    }, 3000);
  }
}

handleResize();

///
var divs = document.querySelectorAll(".pop_up");

function changeZIndex() {
  // Устанавливаем у текущего div z-index равным 100
  this.style.zIndex = 1000;

  // Проходимся по всем остальным div и устанавливаем z-index равным 1
  for (var i = 0; i < divs.length; i++) {
    if (divs[i] !== this) {
      divs[i].style.zIndex = 1;
    }
  }
}

// Назначаем обработчик клика на каждый div
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", changeZIndex);
}
function PopupAppear(popupID) {
  let popup = document.getElementById(popupID);
  let overlay = document.getElementById("overlay");
  popup.style.display = "block";
  overlay.style.display = "block";
}
function PopupDisappear(popupID) {
  let popup = document.getElementById(popupID);
  popup.style.display = "none";
  overlay.style.display = "none";
}
