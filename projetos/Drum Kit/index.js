var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll('.drum')[i].addEventListener('click', function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener('keydown', function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case 'w':
      var sund = new Audio('projetos/Drum Kit/sounds/tom-1.mp3');
      sund.play();
      break;

    case 'a':
      var sund = new Audio('projetos/Drum Kit/sounds/tom-2.mp3');
      sund.play();
      break;

    case 's':
      var sund = new Audio('projetos/Drum Kit/sounds/tom-3.mp3');
      sund.play();
      break;

    case 'd':
      var sund = new Audio('projetos/Drum Kit/sounds/tom-4.mp3');
      sund.play();
      break;

    case 'j':
      var sund = new Audio('projetos/Drum Kit/sounds/snare.mp3');
      sund.play();
      break;

    case 'k':
      var sund = new Audio('projetos/Drum Kit/sounds/crash.mp3');
      sund.play();
      break;

    case 'l':
      var sund = new Audio('projetos/Drum Kit/sounds/kick-bass.mp3');
      sund.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {

  var  activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed')

  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);

}
