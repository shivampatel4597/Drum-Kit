var numberOfBtns = document.querySelectorAll(".drum").length;
console.log(numberOfBtns);
// array to store sounds
// var audioElements = [];

// push songs to array

// for (var i = 1; i <= numberOfBtns; i++) {
//   var audioPath = "sounds" + "/" + "tom" + i + ".mp3";
//   audioElements.push(new Audio(audioPath));
// }

// console.log(audioElements);

for (var i = 0; i < numberOfBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // audioElement1.play();
    this.style.color = "white";
    // var btnIndex = Array.from(document.querySelectorAll("button")).indexOf(
    //   this
    // );
    // audioElements[btnIndex].play();

    // switch statement
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
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
        console.log(buttonInnerHTML);
    }
  });
}
