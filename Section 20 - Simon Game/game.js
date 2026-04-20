
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

$(document).one('keydown', function() {
    nextSequence()
})

$(".btn").click(function() {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    animatePress($(this));
    checkAnswer(userClickedPattern);
})

function checkAnswer() {
    if (userClickedPattern[userClickedPattern.length - 1] == gamePattern[userClickedPattern.length -1]) {
        playSound(userClickedPattern[userClickedPattern.length - 1]);
        if (userClickedPattern.length == gamePattern.length) {
            level += 1;
            userClickedPattern = [];
            setTimeout(function() {
                nextSequence();
                },750);
            
        }
    }
    else {
        playSound('wrong');
        $('body').addClass('game-over');
        $('h1').text('Game Over, Press Any Key to Restart');
        setTimeout(function() {
            $('body').removeClass('game-over');
        },200);
        startOver();
    }
}

async function nextSequence(){
    $('h1').text('Level ' +level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    for(var i = 0; i < gamePattern.length;i++){
        var getID = '#'+gamePattern[i];
        $(getID).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(gamePattern[i]);
        await delay(750);
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $(document).one('keydown', function() {
        nextSequence();
    })
}

function animatePress(key){
     var active_button = $(key);
     active_button.addClass('pressed');
     setTimeout(function() {
        active_button.removeClass("pressed"); 
        },100);
}

function playSound(name) {
    switch(name) {
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        default:
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            break;
    }
};
