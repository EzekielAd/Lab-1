document.querySelector("h1").textContent = "Lab 1";
var userselection = prompt("What do you want to play? Rock, Paper or Scissors?");

var computerselecotion = Math.random();
console.log("Computer Selected", computerselecotion);
console.log("User Selected ", userselection);

if (computerselecotion >= 0 && computerselecotion <= 0.34) {
    var computerselecotion= "Paper";
}
else if (computerselecotion>= 0.35 && computerselecotion <= 0.67) {
    var computerselecotion = "Scissors";

}else if( computerselecotion >= 0.68 && computerselecotion <= 1){
    var computerselecotion = "Rock";
}
document.write("<br> Player played: " + userselection);
document.write("<br> Computer played: " + computerselecotion);

if (userselection == "Rock" && computerselecotion == "Paper") {
    document.write("<br> YOU LOSE!");
}
else if (userselection == "Rock" && computerselecotion == "Scissors") {
    document.write("<br> YOU WIN!");
}
else if (userselection === computerselecotion) {
    document.write("<br> oops Thats A Draw!");
}


else if (userselection = "Paper" && computerselecotion == "Rock") {
    document.write("<br> YOU Win!");
}
else if (userselection = "Paper" && computerselecotion == "Scissors") {
    document.write("<br> YOU Lose!");
}
else if (userselection === computerselecotion) {
    document.write("<br> oops Thats A Draw!");
}

else if (userselection = "Scissors" && computerselecotion == "Paper") {
    document.write("<br> YOU WIN!");
}

else if (userselection = "Scissors" && computerselecotion == "Rock") {
    document.write("<br> YOU LOSE!");
}
else if (userselection === computerselecotion) {
    document.write("<br> oops Thats A Draw!");
}