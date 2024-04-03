//https://api.quotable.io/random

const url=`https://api.quotable.io/random`;
const output=document.getElementById("quote");
const output1=document.getElementById("author");

async function getquote(){
    const response=await fetch(url);
    const data=await response.json();

   
    output.innerHTML=data.content;
    output1.innerHTML=data.author;
    console.log(data);
}
function tweet(){
    let text=`${output.innerHTML}%0A_${ output1.innerHTML}`;
    window.open("https://twitter.com/intent/tweet?text="+text);
}

window.addEventListener("load",getquote);