let gameSeq=[];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["one", "two","three","four"];

let body = document.querySelector("body");

function btnFlah(btn){
    btn.classList.add("flash");
    
    
    setTimeout(function(){
        btn.classList.remove("flash")
    },550);
    
    }
function userFlah(btn){
    btn.classList.add("red");
    
    
    setTimeout(function(){
        btn.classList.remove("red")
    },550);
    
    }


function levelUP(){
 userSeq =[];
    level++;
    h2.innerText= `level ${level}`

    let randomInd = Math.floor(Math.random()*3);
    let ranColor = btns[randomInd];
    let RandomBtn = document.querySelector(`.${ranColor}`) 

    gameSeq.push(ranColor);
    
   setTimeout(btnFlah(RandomBtn),300);
   console.log(gameSeq);
}




document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game strafdc");
     
        started = true;
    
        levelUP();
    }
})

body.addEventListener("click",function(){
    if(started == false){
        console.log("game strafdc");
     
        started = true;
    
        levelUP();
    }
})


function checkAns(index){
 
 if(userSeq[index] === gameSeq[index]){

    if(gameSeq.length== userSeq.length){
       
        setTimeout(levelUP(),2000);
    }
    console.log("same value");
 }
 else{
    h2.innerText ="game over press any key to start" + " your score was " + level;
    console.log("wrong input ! Game over   ! press any key to start ");
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout( function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);

    reset();

   
}




function reset(){
    started == false;
    gameSeq = [];
    userSeq =[];
    level = 0;

}



}

function btnPressend(){
    let btn = this;
   
    userFlah(btn);

    userColor =  btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}


let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click" , btnPressend);
}
