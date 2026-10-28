let form=document.querySelector("form")
let inputs=document.querySelectorAll("input")
let h3=document.querySelector("h3")
let h4=document.querySelector("h4")
let img=document.getElementById("image")
let div1=document.querySelector(".div1")
form.addEventListener("submit",function(event){
    event.preventDefault();
    h3.textContent=inputs[0].value;
    h4.textContent=inputs[1].value;
    img.setAttribute("src",inputs[2].value);
    div1.style.display="flex";
    form.style.display="none";
})
//mouseover keys