let input=document.querySelector("input")
let h1=document.querySelector("h1")
let ct=0;
input.addEventListener("input",function(e){
    let chara=e.data
    console.log(chara)
   if(/^[a-zA-Z]+$/.test(chara) && chara !== null)
    ct++;

   h1.textContent=ct;
})