const notescontainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");

function savedata(){
    const sdata=notescontainer.innerHTML;
    localStorage.setItem("notes",sdata);
}

window.addEventListener("load",()=>{
    const saveddata=localStorage.getItem("notes");
    if(saveddata){
        notescontainer.innerHTML=saveddata;
        console.log(saveddata);
    }
})

createbtn.addEventListener("click",()=>{
let inputbox=document.createElement("p");
let img=document.createElement("img");
inputbox.className="input-box";
inputbox.setAttribute ("contenteditable","true");

img.src="images/delete.png";
notescontainer.appendChild(inputbox).appendChild(img);
});

notescontainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        savedata();
    }
})


notescontainer.addEventListener("input", (e) => {
    const target = e.target;
    if (target.classList.contains("input-box")) {
        savedata();

    }
});