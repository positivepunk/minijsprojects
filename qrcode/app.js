/*margin-top: 15%;
    margin-left: 32%;
    display: flex;
    justify-content: center;*/ 
    //https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Exampl

    let imgbox=document.getElementById("imgbox");
    let qrimage=document.getElementById("qrimage");
    let qrtext=document.getElementById("qrtext");


    function getqr(){
        if(qrtext.value.length>0){
            qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`
        imgbox.classList.add("show-img");
        }
        else{
            qrtext.classList.add("error");
            setTimeout(()=>{
                qrtext.classList.remove("error");
            },1000)   
        }
        
    }