let score1=JSON.parse(localStorage.getItem('score'));
if(score1===null){
    localStorage.setItem('score',JSON.stringify({win:0,lose:0,draw:0,total:0}));
    score1=JSON.parse(localStorage.getItem('score'));
}
const display=(exp)=>{
    document.querySelector('.display').innerHTML=exp;
}
const displayWin=()=>{
    document.querySelector('.counter').innerHTML='wins: '+score1.win+', loses: '+score1.lose+', draws: '+score1.draw+', total: '+score1.total;
} 
const displayWinRate=()=>{
    document.querySelector('.winRate').innerHTML=`Win Rate: ${(score1.win/(score1.total)*100).toFixed(2)}%`;
}

//reset score
const resetElement=document.querySelector("#resetScore");
resetElement.addEventListener('click',()=>{
    score1.win=0;
    score1.lose=0;
    score1.draw=0;
    score1.total=0;
    localStorage.setItem('score',JSON.stringify(score1));
    displayWin();
    displayWinRate();
});

//hide score
document.querySelector(".Hide").addEventListener('click',()=>{
    const result = document.querySelector(".resultContainer");
        if (result.style.display !== "none") {
            result.style.display = "none";
        } 
        else {
            result.style.display = "flex";
            displayWin();
            displayWinRate();
        }
});

const youText = document.createElement('p');
youText.textContent = 'You';
const meText = document.createElement('p');
meText.textContent = 'ME';

/* rock */
const img1 = document.createElement('img');
img1.src = 'rock-emoji.png';
img1.style.width = '6rem';
/*paper */
const img2=document.createElement('img');
img2.src='paper-emoji.png';
img2.style.width='6rem';
/*scissors */
const img3 =document.createElement('img');
img3.src='scissors-emoji.png';
img3.style.width='6rem';

//autoplay
let flag=true;
const autoElement=document.querySelector("#autoBtn");
autoElement.addEventListener('click',()=>{
    if(flag){
        interval=setInterval(function (){
            let rnd=Math.random();
            if(rnd<1/3){
                clickedRPS('R');
            }
            else if(rnd<2/3){
                clickedRPS('P');
            }
            else {
                clickedRPS('S');
            }
        },500);
        flag=false;
    }
    else {
        flag=true;
        clearInterval(interval);
    }
});

//RPS
document.querySelector("#rockBtn").addEventListener('click',()=>clickedRPS('R'));
document.querySelector("#paperBtn").addEventListener('click',()=>clickedRPS('P'));
document.querySelector("#scissorsBtn").addEventListener('click',()=>clickedRPS('S'));

function clickedRPS(charc){
    let rnd=Math.random();
    if(charc==='R'){
        if(rnd<1/3){
            display('DRAW');
            score1.draw++;
            score1.total++;
            const container = document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img1);
            const imgRock=img1.cloneNode();
            container.appendChild(imgRock);
            container.appendChild(meText);
        }
        else if(rnd<2/3){
            display('YOU LOSE');
            score1.lose++;
            score1.total++;
            const container=document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img1);
            container.appendChild(img2);
            container.appendChild(meText);
        }
        else {
            display('YOU WIN');
            score1.win++;
            score1.total++;
            const container=document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img1);
            container.appendChild(img3);
            container.appendChild(meText);
        }
    }
    else if(charc==='P'){
        if(rnd<1/3){        
            display('YOU WIN');
            score1.win++;
            score1.total++;
            const container=document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img2);
            container.appendChild(img1);
            container.appendChild(meText);
        }
        else if(rnd<2/3){
            display('DRAW');
            score1.draw++;
            score1.total++;
            const container=document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img2);
            const imgPaper=img2.cloneNode();
            container.appendChild(imgPaper);
            container.appendChild(meText);
        }
        else {
            display('YOU LOSE');
            score1.lose++;
            score1.total++;
            const container=document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img2);
            container.appendChild(img3);
            container.appendChild(meText);
        }
    }
    else if(charc=='S'){
        if(rnd<1/3){
            display('YOU LOSE');
            score1.lose++;
            score1.total++;
            const container=document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img3);
            container.appendChild(img1);
            container.appendChild(meText);
        }
        else if(rnd<2/3){
            display('YOU WIN');
            score1.win++;
            score1.total++;
            const container=document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img3);
            container.appendChild(img2);
            container.appendChild(meText);
        }
        else {
            display('DRAW');
            score1.draw++;
            score1.total++;
            const container=document.getElementsByClassName('choices')[0];
            container.innerHTML='';
            container.appendChild(youText);
            container.appendChild(img3);
            const imgScissors=img3.cloneNode();
            container.appendChild(imgScissors);
            container.appendChild(meText);
        }

    }
        displayWin();
        displayWinRate();
        localStorage.setItem('score',JSON.stringify(score1));
        document.querySelector(".btnHide").style.display="flex";
}

