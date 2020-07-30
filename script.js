var userScore=0;
var computerScore=0;
var userScoreSpan=document.getElementById("user-score");
var computerScoreSpan=document.getElementById("computer-score");
var scoreBoard_div=document.querySelector(".score-board");
var result_div=document.querySelector(".result>h2");
var rockdiv=document.getElementById("stone");
var paperdiv=document.getElementById("paper");
var scissordiv=document.getElementById("scissor");

function computerChoice(){
	var choices=["stone","paper","scissor"];
	var randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function win(userChoice,ComputerChoice){
userScore++;
userScoreSpan.innerHTML=userScore;
computerScoreSpan.innerHTML=computerScore;
var userSub="user".fontsize(3).sub();
var compSub="computer".fontsize(3).sub();
result_div.innerHTML=`${userChoice}${userSub} beats ${ComputerChoice}${compSub} .You Win!!&#10084`;
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow');},3000);
}

function lose(userChoice,ComputerChoice){
computerScore++;
userScoreSpan.innerHTML=userScore;
computerScoreSpan.innerHTML=computerScore;
var userSub="user".fontsize(3).sub();
var compSub="computer".fontsize(3).sub();
result_div.innerHTML=`${userChoice}${userSub} lose to ${ComputerChoice}${compSub} .You Lose!! &#128061&#9935`;
document.getElementById(userChoice).classList.add('red-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow');},3000);
}

function draw(userChoice,ComputerChoice){
var userSub="user".fontsize(3).sub();
var compSub="computer".fontsize(3).sub();
result_div.innerHTML=`${userChoice}${userSub} draws with ${ComputerChoice}${compSub} .It's a draw!!&#127770 `;
document.getElementById(userChoice).classList.add('gray-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow');},3000);
}

function game(userChoice){
var ComputerChoice=computerChoice();
switch(userChoice + ComputerChoice){
	case "scissorpaper":
	case "stonescissor":
	case "paperstone":
	win(userChoice,ComputerChoice);
	break;
	case "paperscissor":
	case "scissorstone":
	case "stonepaper":
	lose(userChoice,ComputerChoice);
	break;
	case "stonestone":
	case "paperpaper":
	case "scissorscissor":
	draw(userChoice,ComputerChoice);
	break;
}
}

function main(){
	rockdiv.addEventListener('click',function(){
	game("stone");
})

paperdiv.addEventListener('click',function(){
	game("paper");
})

scissordiv.addEventListener('click',function(){
	game("scissor");
})
}
main();