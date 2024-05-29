let btn = document.querySelector("#btn");
let colour = "dark";
btn.addEventListener("click",()=>{
    if(colour==="dark"){
        colour="light"
        document.querySelector("body").style.backgroundColor = "white"
        
    }
    else{
        colour="dark";
        document.querySelector("body").style.backgroundColor = "black"
       
        
    }
    console.log(colour);
})



