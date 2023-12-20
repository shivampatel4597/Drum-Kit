// var numberOfBtns = document.querySelectorAll(".drum").length;

document.addEventListener("keypress", function (event) {
  var btnPressed = event.key;
  buttonAnimation(event.key);
  // btnPressed.style.color = "white";

  switch (btnPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;

    case "j":
      var tom5 = new Audio("sounds/tom5.mp3");
      tom5.play();
      break;

    case "k":
      var tom6 = new Audio("sounds/tom6.mp3");
      tom6.play();
      break;

    case "l":
      var tom7 = new Audio("sounds/tom7.mp3");
      tom7.play();
      break;
    default:
      console.log(btnPressed);
  }
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 300);
}
