let userscore=0;
let computerscore=0;

const message=document.querySelector("#message");

const playing=(userchoiceid)=>{
    console.log("user:"+userchoiceid);
   const cc=computerchoice();
   console.log("computer:"+cc);

   if(userchoiceid==cc){
    message.innerText="draw play again";
   }
   else if((userchoiceid === 'rock' && cc === 'scissors') ||
   (userchoiceid === 'paper' && cc === 'rock') ||
   (userchoiceid === 'scissors' && cc === 'paper'))
   {
    showwinner(true);
   }
   else{
    showwinner(false);
   }

    }
    const showwinner=(winner)=>{
        if(winner){
            userscore++;
            message.innerText="user win play again";
            document.querySelector("#user-score").innerText=userscore;
        }
        else{
            computerscore++;
            message.innerText="user lost play again";
            document.querySelector("#computer-score").innerText=computerscore;
        }
    }
    
    const computerchoice=()=>{
        const arr=["rock","paper","scissors"];
        const ranidx=Math.floor(Math.random()*3);
        return arr[ranidx];
    
    }
const choices=document.querySelectorAll(".choice");

choices.forEach((choice) =>{
choice.addEventListener("click",()=>{
    const userchoiceid=choice.getAttribute("id");
    playing(userchoiceid);
}
);
});

