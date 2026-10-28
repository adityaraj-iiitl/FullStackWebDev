let form= document.querySelector("form")
let input=document.getElementById("task")
let div2=document.querySelector(".div2")
let ct=0;
let h5=document.querySelector("h5")
form.addEventListener("submit",function(event){
    event.preventDefault();
    ct++;
    let label=document.createElement("label")
    let inpu=document.createElement("input")
    inpu.setAttribute("type","checkbox")
    inpu.setAttribute("id",`${ct}`)
    label.setAttribute("id",`${ct}#`)
    inpu.classList.add("gapc")
    label.append(inpu, document.createTextNode(event.target[0].value))
    div2.appendChild(label);
    console.log(event)
   let br=document.createElement("br")
   
   h5.textContent=`${ct}`
   div2.appendChild(br);
    if(ct>3)
      {
        h5.style.color="red";
      }else
      {
        h5.style.color="white";
      }
})
h5.style.fontSize="20px";
let label=document.querySelectorAll("label")

let inputs=document.querySelectorAll("input")
console.log(inputs)

div2.addEventListener("change",function(event){
    if(event.target.matches(".gapc"))
    {
      if(event.target.checked)
      {
        ct--;
      }else
      {
        ct++;
      }
      h5.textContent=`${ct}`;
      let id1=event.target.id;
      let labe=document.getElementById(`${id1}#`)
      labe.remove();
    }
})


