const categories = [
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations"
];

const entries=document.querySelector("#category");

for(let each of categories){
    const option=document.createElement("option");
    option.value=each;
    option.textContent=each;
    entries.appendChild(option);
}


const monitor=document.querySelector("#next-button1");

monitor.addEventListener("click",(event)=>{
const selection=document.querySelector("#category").value;
const input=document.querySelector("#question-count").value;
const difficulty=document.querySelector("#difficulty").value;
console.log(selection);
console.log(input);
console.log(difficulty);
localStorage.setItem("selectedValue", selection);
localStorage.setItem("inputValue", input);
localStorage.setItem("difficultyValue", difficulty);
window.location.href="index1.html";   
})
