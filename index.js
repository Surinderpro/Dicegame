var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
var randomDiceimage="dice" + randomNumber1 + ".png";//dice1.png - dice6.png
var randomimageSource="images/" + randomDiceimage;//images/dice1.png - images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimageSource);

//document.querySelectorAll("img").setAttribute("src","images/" + Math.floor(Math.random()*6)+1 +".png")

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimageSource2="images/dice"+randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimageSource2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 win!"
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML=" Player 2 win! 🚩"
} 
else {
    document.querySelector("h1").innerHTML="Draw!"
    }