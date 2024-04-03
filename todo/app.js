const input=document.querySelector("#input-text");
const lists=document.querySelector("#list-container");

function find(){
    if(input.value==''){
        alert("you must write something");
    }
    else{
        
        const list=document.createElement("li");
        list.innerHTML=input.value;
        const span=document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(span);
        lists.appendChild(list);

    }
    input.value="";
    savedata();
}

lists.addEventListener("click",(event)=>{
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        savedata();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data",lists.innerHTML);
console.log(localStorage.getItem("data"));
}

function showdata(){
    lists.innerHTML=localStorage.getItem("data");
}

showdata();
