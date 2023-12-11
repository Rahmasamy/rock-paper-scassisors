const computerChoise=document.getElementById('computer-choice');
const userChoice=document.getElementById('user-choice');
const  result=document.getElementById('result');

const possibleChoices=document.querySelectorAll('button');
let userChoiceId;
let computerchoice;
let resultgame;
let flag=0;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoiceId=e.target.id; //  get the id of the button i pressed on 
    userChoice.innerHTML=userChoiceId;
    generateComputerChoice();
    getResult();
}
))
function generateComputerChoice(){
    
    const randomNumber=Math.floor(Math.random()*possibleChoices.length)+1;
    if (randomNumber === 1){
        computerchoice='rock';
    }
    if (randomNumber === 2){
        computerchoice='sacissors';
    }
    if (randomNumber === 3){
        computerchoice='paper';
    }
    computerChoise.innerHTML=computerchoice

}
function setIcons(srcImg,choice){
    var img = document.createElement("img");
    img.src = srcImg;
    img.style.width='34px';
    img.style.height='25px';
    img.style.marginLeft= '6px';
    img.style.marginTop='4px';
    var src = choice;
    src.appendChild(img);
}
function getResult(){
   
    if (userChoiceId === computerchoice){
     flag=1;
     if (userChoiceId == 'rock'){
      resultgame='its a draw by rock!';
       // rock
       setIcons("https://cdn2.iconfinder.com/data/icons/down-to-earth/512/G12_Rock.png", computerChoise);
       setIcons("https://cdn2.iconfinder.com/data/icons/down-to-earth/512/G12_Rock.png", userChoice);
       
     }
    if (userChoiceId == 'paper'){
        resultgame='its a draw by paper!';
         // paper
          
       setIcons("https://cdn4.iconfinder.com/data/icons/origami-23/64/Chick_origami_paper_craft_creative-512.png",computerChoise);
        // paper 
        setIcons("https://cdn4.iconfinder.com/data/icons/origami-23/64/Chick_origami_paper_craft_creative-512.png",userChoice);
     }
    if (userChoiceId == 'sacissors'){
        resultgame='its a draw by sacissors!';
         
        // sacissors 
        setIcons("https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Sclssors.png",computerChoise);
        // sacissors 
        setIcons("https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Sclssors.png",userChoice);
    }
      
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (computerchoice === 'rock' && userChoiceId === 'paper'){
       
        resultgame='win'; 
        // rock
        setIcons("https://cdn2.iconfinder.com/data/icons/down-to-earth/512/G12_Rock.png", computerChoise);
        setIcons("https://cdn4.iconfinder.com/data/icons/origami-23/64/Chick_origami_paper_craft_creative-512.png",userChoice);  
        setIcons("https://cdn0.iconfinder.com/data/icons/auction-and-competition-filled-outline-1/64/win-badge-wining-reward-medal-256.png",result);
    }
    if (computerchoice === 'rock' && userChoiceId === 'sacissors'){
        resultgame='lose';
        
        setIcons("https://cdn2.iconfinder.com/data/icons/down-to-earth/512/G12_Rock.png", computerChoise);
        setIcons("https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Sclssors.png",userChoice);
    }
    if (computerchoice === 'paper' && userChoiceId === 'sacissors'){
        resultgame='win';
        // paper 
        setIcons("https://cdn4.iconfinder.com/data/icons/origami-23/64/Chick_origami_paper_craft_creative-512.png",computerChoise);
        // sacissors 
        setIcons("https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Sclssors.png",userChoice);
    }
    if (computerchoice === 'paper' && userChoiceId === 'rock'){
        resultgame='lose';
        setIcons("https://cdn2.iconfinder.com/data/icons/down-to-earth/512/G12_Rock.png", userChoice);
        setIcons("https://cdn4.iconfinder.com/data/icons/origami-23/64/Chick_origami_paper_craft_creative-512.png",computerChoise);
    }
    if (computerchoice === 'sacissors' && userChoiceId === 'rock'){
        resultgame='win';
        // sacissors 
        setIcons("https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Sclssors.png",computerChoise);
         // rock
        setIcons("https://cdn2.iconfinder.com/data/icons/down-to-earth/512/G12_Rock.png",userChoice);

    }
    if (computerchoice === 'sacissors' && userChoiceId === 'paper'){
        resultgame='lose';
        // sacissors 
        setIcons("https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Sclssors.png",computerChoise);
        // paper 
        setIcons("https://cdn4.iconfinder.com/data/icons/origami-23/64/Chick_origami_paper_craft_creative-512.png",userChoice);
    }
    result.innerHTML=resultgame;
    if (resultgame === 'win'){
        setIcons("https://cdn3.iconfinder.com/data/icons/awards-67/64/trophy-award-medal-wining-star-64.png",result);
    }
    if (resultgame== 'lose'){
        setIcons("https://cdn2.iconfinder.com/data/icons/video-game-color-line/48/video_game_pixel_perfect_color_line_icons_25-game-over-256.png",result);

    }
   
    if (flag== 1){
     setIcons("https://cdn1.iconfinder.com/data/icons/chess-bzzricon-filled-lines/512/20_Draw-256.png",result);
     flag=0;
    }
}