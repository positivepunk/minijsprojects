let currentcount=0;
let answered=0;
let totalquestions=0;
/*https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
https://opentdb.com/api_category.php
*/

//const baseurl=`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`;


const categories1 = {
    "General Knowledge": 9,
    "Entertainment: Books": 10,
    "Entertainment: Film": 11,
    "Entertainment: Music": 12,
    "Entertainment: Musicals & Theatres": 13,
    "Entertainment: Television": 14,
    "Entertainment: Video Games": 15,
    "Entertainment: Board Games": 16,
    "Science & Nature": 17,
    "Science: Computers": 18,
    "Science: Mathematics": 19,
    "Mythology": 20,
    "Sports": 21,
    "Geography": 22,
    "History": 23,
    "Politics": 24,
    "Art": 25,
    "Celebrities": 26,
    "Animals": 27,
    "Vehicles": 28,
    "Entertainment: Comics": 29,
    "Science: Gadgets": 30,
    "Entertainment: Japanese Anime & Manga": 31,
    "Entertainment: Cartoon & Animations": 32
};


async function getquiz(cat,count,diff){
baseurl=`https://opentdb.com/api.php?amount=${count}&category=${categories1[cat]}&difficulty=${diff}&type=multiple`;
const response=await fetch(baseurl);
const data=await response.json();
totalquestions=data.results.length;
console.log(totalquestions);
return data;

};

window.addEventListener("load", async () => {
    const category = localStorage.getItem("selectedValue"); // Replace with selected category
    const count = localStorage.getItem("inputValue"); 
    const difficulty=localStorage.getItem("difficultyValue"); // Replace with selected number of questions
    
    try {
        const questions = await getquiz(category, count, difficulty);
        console.log(questions);
        console.log(count);
        console.log(difficulty);

       populate(questions.results[currentcount]);


       const nextButton = document.querySelector("#next-button");
       nextButton.style.display = "none";
       nextButton.disabled = false;

       nextButton.addEventListener('click', (event) => {
           currentcount++; // Increment current question index

           if (currentcount < questions.results.length) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            populate(questions.results[currentcount],currentcount);
            nextButton.style.display = "none";
            nextButton.disabled = true;
           } else {
            localStorage.setItem("tq", totalquestions);
            localStorage.setItem("aq", answered);
            window.location.href = "index2.html"; // Redirect to index2.html
       }});

    } catch (error) {
        window.location.reload();
        console.error("Error fetching questions:", error);
    }


}); 


function populate(data){
   
    
    const qno=document.querySelector("#question");
    const questionupdate=document.querySelector(".quiz h2");
    const optionupdate=document.querySelector(".answer-buttons");
    qno.innerHTML=`Question No ${currentcount+1}`;
    questionupdate.innerHTML = '';
    optionupdate.innerHTML= '';
    questionupdate.innerHTML=data.question;
    console.log(data.correct_answer)

    let randindx=Math.floor(Math.random()*(data.incorrect_answers.length+1));
    let options=data.incorrect_answers;

    options.splice(randindx,0,data.correct_answer);
    console.log(options);
    
    options.forEach((qs)=>{
        const option=document.createElement("button");
         option.innerHTML=qs;
         option.className = 'btn';
        optionupdate.appendChild(option);

        option.addEventListener("click",(event) => {
            const selectedValue = event.target.innerHTML.trim();
            const correctAnswer = data.correct_answer.trim();
            event.target.disabled=true;
            if(selectedValue===correctAnswer){
                event.target.classList.add("correct");
                console.log("correct answer");
                answered++;
                console.log(answered);
            }
            else{
                event.target.classList.add("incorrect");
                console.log("wrong answer");
            }

            const allButtons = document.querySelectorAll(".answer-buttons button");
            allButtons.forEach(button => {
                if(button !== event.target) {
                    button.disabled = true;
                }
            });

            const nextButton = document.querySelector("#next-button");
            nextButton.style.display = "block";
            nextButton.disabled=false;

            // Check if the selected answer is correct
        });
    })


}