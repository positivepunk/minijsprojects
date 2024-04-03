const output=document.getElementById("password");
const getter=document.getElementById("btn");
const length=12;
const cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small="abcdefghijklmnopqrstuvwxyz";
const digits="0123456789";
const special="!@#$%^&*_+-=(){}|\<>?";
const allinone=cap+small+digits+special;

function createpass(){
let password="";
document.getElementById("popup").setAttribute("class", "popup");
password+=cap[Math.floor(Math.random()*cap.length)];
password+=small[Math.floor(Math.random()*small.length)];
password+=digits[Math.floor(Math.random()*digits.length)];
password+=special[Math.floor(Math.random()*special.length)];

while(length>password.length){
    password+=allinone[Math.floor(Math.random()*allinone.length)];
}

output.value=password;
};

function copy(){
    document.getElementById("popup").classList.toggle("popup1");
    output.select();
    document.execCommand("copy");
}
