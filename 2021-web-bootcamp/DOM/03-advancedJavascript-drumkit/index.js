// document.querySelector("button").addEventListener("click", handleClick);
// //document.querySelector("button").addEventListener("click", handleClick()); 시작하자마자 동작되는 거임

// function handleClick(){
//     alert("Clicked");
// }

var numberOfDrumButtons = document.querySelectorAll('.drum').length

for (var i = 0; i < numberOfDrumButtons; i++) {
    //detecting button press
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML
    
    makeSound(buttonInnerHTML);   
    buttonAnimation(buttonInnerHTML);
  })
  //detecting keyboard press
  document.addEventListener("keydown", function(event){
      makeSound(event.key)
      buttonAnimation(event.key)
  })
}

function makeSound(key){
     
    switch (key) {
      case 'w':
        var audio = new Audio('./sounds/tom-1.mp3')
        audio.play()
        break
      case 'a':
        var audio = new Audio('./sounds/tom-2.mp3')
        audio.play()
        break
      case 's':
        var audio = new Audio('./sounds/tom-3.mp3')
        audio.play()
        break
      case 'd':
        var audio = new Audio('./sounds/tom-4.mp3')
        audio.play()
        break
      case 'j':
        var audio = new Audio('./sounds/kick-bass.mp3')
        audio.play()
        break
      case 'k':
        var audio = new Audio('./sounds/snare.mp3')
        audio.play()
        break
      case 'l':
        var audio = new Audio('./sounds/crash.mp3')
        audio.play()
        break
    }
  }

  function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed")
    },100);
  }
    

