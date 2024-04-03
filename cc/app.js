const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  const dropdowns=document.querySelectorAll(".dropdown select");
  const btn=document.querySelector("form button");
  const fromcurr=document.querySelector(".from select");
  const tocurr=document.querySelector(".to select");
  const message=document.querySelector(".msg");

  for(let select of dropdowns){
    for(let code in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=code;
        newoption.value=code;
        if(select.name==="from" && code==="USD"){
            newoption.selected="selected";
        }
        else if(select.name==="to" && code==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener(("change"),(eve)=>{
        updateflag(eve.target)
    });
  }

  const updateflag=(event)=>{
    console.dir(event.parentElement);
    const currcode=event.value;
    const finalcode=countryList[currcode];
    const imgurl=`https://flagsapi.com/${finalcode}/flat/64.png`;
    const img=event.parentElement.querySelector("img");
    img.src=imgurl;
    console.log(currcode);
  }

  btn.addEventListener("click",async(eve)=>{
    eve.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval=="" || amtval<0){
        amtval=1;
        amount.value=1;
    }
    //console.log(fromcurr.value,tocurr.value);
    let finalurl=`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let response=await fetch(finalurl);
    let data=await response.json();
    let rate=data[tocurr.value.toLowerCase()];
    console.log(rate);
    message.innerText=` ${amtval} ${fromcurr.value} = ${amtval*rate} ${tocurr.value}`
  });