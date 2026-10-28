let h3= document.querySelector("h3")

let inp = document.getElementById("texti")

inp.addEventListener("input",function(e){
    if(e.target.value!=null)
    {
       h3.textContent=e.target.value;
    }
})

window.addEventListener("keydown",function(e){
    h3.textContent=e.key;
})