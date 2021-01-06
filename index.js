var randomNumber1=(Math.floor(Math.random()*6))+1;
var attri= "images/"+"dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",attri);
var randomNumber2=(Math.floor(Math.random()*6))+1;
var attri2= "images/"+"dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",attri2);

if (randomNumber1>randomNumber2) {
  document.getElementById("result").innerHTML = "🚩 Player 1 wins!";
}else if (randomNumber2>randomNumber1) {
  document.getElementById("result").innerHTML = "Player 2 wins🚩";

}else {
  document.getElementById("result").innerHTML = "Draw!";

}
