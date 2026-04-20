
// document.querySelector("button").addEventListener("click", handleClick)

// function handleClick(){
//     alert("I got clicked!")
// }

// Her method
// var numOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numOfDrumButtons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("I got clicked!")
//     })
// }

let buttons = document.querySelectorAll(".drum")

buttons.forEach(button => {
    button.addEventListener("click", function(){
        playSound(button.innerHTML)
        buttonAnimation(button.innerHTML)
    })
});

document.addEventListener("keydown", function(event){
    playSound(event.key)
    buttonAnimation(event.key)
});
        
function playSound(key){
    switch (key) {
        case 'w':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'a':
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(key)
    }
};

function buttonAnimation (key){
    var active_button = document.querySelector("."+key);
    active_button.classList.add("pressed");
    setTimeout(function() {
            active_button.classList.remove("pressed");
    }, 100);
};