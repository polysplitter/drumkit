
// Dectecting button click.

document.querySelectorAll(".drum").forEach(function(element) {
  element.addEventListener("click", function() {
    mapInputs(this.textContent);
    buttonAnimation(this.textContent);
  });
});

// Dectecting keyboard press.

document.addEventListener("keypress", function(event) {
  mapInputs(event.key);
  buttonAnimation(event.key);
});

function mapInputs(character) {
  switch (character) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(character);
  }
}

function buttonAnimation(currentKey) {

  var pressed = document.querySelector("." + currentKey).classList;

  pressed.toggle("pressed");
  setTimeout(function() {
    pressed.toggle("pressed");
  }, 100);
}
