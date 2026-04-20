var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageName1 = "./images/dice"+randomNumber1+".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageName2 = "./images/dice"+randomNumber2+".png";

document.querySelector("img.img1").setAttribute("src", imageName1)
document.querySelector("img.img2").setAttribute("src", imageName2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One Wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player Two Wins!"
}
else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Its a Tie!"
}