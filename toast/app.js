let showbox=document.getElementById("toastbox");
let success='<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let error='<i class="fa-solid fa-circle-xmark"></i>Please fix the error';
let invalid='<i class="fa-solid fa-circle-exclamation"></i>Invalid ,check again';

function showtoast(message){
let toast=document.createElement("div");
toast.classList.add("toast");
toast.innerHTML=message;
if(message.includes("error")){
    toast.classList.add("error");
}
else if(message.includes("Invalid")){
toast.classList.add("invalid");
}
showbox.appendChild(toast);

setTimeout(()=>{
    toast.remove();
},6000);
}