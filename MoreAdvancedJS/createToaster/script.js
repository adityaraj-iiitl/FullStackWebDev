let toastCon=document.querySelector("#toast-container")
let btn=document.querySelector(".show-toast-button")
let inpu=document.querySelector("#toast-message")

btn.addEventListener("click",function(){
    let sposition=document.querySelector('.position-option[aria-pressed="true"]');
    let option=document.querySelector('.type-option[aria-pressed="true"]')
     let pos=sposition?.dataset.position;
     let opt=option?.dataset.toastType;
     
     let div=document.createElement("div")
   
    div.textContent=inpu.value;
    article=document.createElement("article")
    article.classList.add("toast",`toast-${opt}`)
    article.appendChild(div)
    option.classList.add("is-selected")
    if(pos=="top-right")
        toastCon.prepend(article);
    else
         toastCon.appendChild(article);
})
    let btns=document.querySelectorAll('.type-option')
     let option=document.querySelector('.type-option[aria-pressed="true"]')

    btns.forEach((button)=>{
        button.addEventListener("click",function(e){
         let option=document.querySelector('.type-option[aria-pressed="true"]')
            btns.forEach((ev)=>{
              ev.classList.remove("is-selected")
              ev.setAttribute("aria-pressed","false");
            });
           e.currentTarget.classList.add("is-selected")
           e.currentTarget.setAttribute("aria-pressed","true")
    });
});

let butns=document.querySelectorAll(".position-option")
butns.forEach((item)=>{
    item.addEventListener("click",function(ev){
        butns.forEach((ite)=>{
            ite.classList.remove("is-active")
            ite.setAttribute("aria-pressed",false);
        })
        ev.currentTarget.classList.add("is-active")
        ev.currentTarget.setAttribute("aria-pressed","true");
    })
});

//this i made slightly off-context here for using the concepts i can make a function createToaster(inputs) which takes some inputs about the position , the message and the type of the toast and will then create the toast , we will then create an outside function which accepts a function in return from that function

//now with event listener on the buttons we can attach this secondary function which will accept all the inputs from the user and then pass it to the closure function or we say pass it to itself as it will already have the function and then perform the certain function

