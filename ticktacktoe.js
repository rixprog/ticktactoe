let boxes=document.querySelectorAll('.boxes');
let h2=document.querySelector('h2')

winning_patterns=[];
for(let i=0;i<9;i++){
    if(i===3 || i===6 || i==0){
        let s=[i,i+1,i+2];
        winning_patterns.push(s);
        console.log(s);
    }
    if(i===0||i===1||i===2){
        let s=[i,i+3,i+6];
        winning_patterns.push(s);
        console.log(s)
    }
    if(i===0){
        let s=[i,i+4,i+8];
        winning_patterns.push(s);
        console.log(s);
    }
    if(i===2){
        let s=[i,i+2,i+4];
        winning_patterns.push(s);
        console.log(s);
    }
   
}
currPlayer='X';
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',(handler1)=>{
 
        if(currPlayer=='X'){
            boxes[i].innerText='O';
            currPlayer='O';

        console.log(`you clicked the box${i}`);
     
            
        }
        else{
            boxes[i].innerText='X';
            currPlayer='X';
            console.log(`you clicked the box${i}`);
            ;
         
        }
        winner()
       boxes[i].disabled=true;
    })

    
}


function winner(){
    victory=''
    for(let i of winning_patterns){
        let l='';
        for(let j of i){
            let s=boxes[j].innerText;
            l+=s;
        }
       if(l[0]===l[1]&&l[0]===l[2]&&l!=''){
        victory+=l[0];
        console.log(l[0],'is the winner');
        h2.innerText=`${l[0]} is the winner`
        disablebtns();
        break;
       } 
    }
return victory;
}

const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let reset=document.querySelector('#reset');

reset.addEventListener('click',()=>{
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText='';
        h2.innerText='';
        boxes[i].disabled=false;
    }
})