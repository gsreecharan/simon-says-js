let gameSeq = [];
let userSeq = [];

let btns = ["red" , "green" , "yellow" , "purple"];

let started = false;

let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown" , function () {
    if(started == false){
        console.log("Game Started");
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },150)
}

function levelUp(){
    userSeq = [];
    level ++;
    h2.textContent = `level ${level}`;

    let ranInd = Math.floor(Math.random() * 4);
    let randCol = btns[ranInd];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(ranInd);
    // console.log(randCol);
    // console.log(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log(`Current Level is: ${level}`);
    // let idx = level - 1;
    if(gameSeq[idx] == userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("Colors Matched");
    }else{
        // console.log("Wrong Color ");
        if(level > highScore){
            highScore = level;
        }
        h2.innerHTML =  `Game over! your score is <b>${level}</b> Your High Score Was: ${highScore} <br> Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250)
        
        // if(highScore > level){
        //     console.log(`Your High Score Was: ${highScore}`);
        // }else{
        //     console.log("this is your new high score");
        // }
        // reset();
    }
}


function btnPress (){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns){
 btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}