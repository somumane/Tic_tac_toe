let win =new Audio("win.mp3");
let poin=new Audio("poin.mp3");
let lose=new Audio("lose.mp3");
let turn="X";
let gameover=false;
//Changing Turn
const changeturn=()=>{
    return turn==="X"?"0":"X" 
}
// Check winner logic
function checkwin() {
    let boxes = document.getElementsByClassName("boxes");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText !== "")) {
            document.querySelector(".gamewiner").innerText = boxes[e[0]].innerText + " is Won";
            gameover = true;
            win.play();
        }
    });
}
// game logic
 let boxes=document.getElementsByClassName("box");
 Array.from(boxes).forEach((e)=>{
    let boxtext=e.querySelector(".boxes");
    e.addEventListener("click",()=>{
        if(boxtext.innerText===""){
           boxtext.innerText=turn;
           turn=changeturn();
           poin.play();
           checkwin();
           if(!gameover){
            document.querySelector(".gamewiner").innerText="Turn For = "+turn;
           }
        }
    })
 })
 //Restart Button
reset.addEventListener("click",()=>{
    let boxes=document.querySelectorAll(".boxes");
    Array.from(boxes).forEach(e=>{
        e.innerText=" ";
    });
    turn="X";
    gameover=false
    document.querySelector(".gamewiner").innerText="Turn For = "+turn;
})