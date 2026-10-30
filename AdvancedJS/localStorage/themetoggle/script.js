const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
let theme=localStorage.getItem("theme")

let body=document.querySelector("body")
body.classList.add(`${theme}`)
darkMode.addEventListener("change",function()
{
    if(darkMode.matches)
    {
        body.classList.remove("light")
       body.classList.add("dark");
    }else
    {
        body.classList.remove("dark")
        body.classList.add("light")
    }
})

let btn= document.querySelector(".btn")
btn.addEventListener("click",function(){
  if(body.classList.contains("dark"))
  {
    body.classList.remove("dark")
    body.classList.add("light");
  }else
  {
    body.classList.remove("light")
    body.classList.add("dark");
  }
   if(body.classList.contains("dark"))
{
    localStorage.setItem("theme","dark");
}else
{
    localStorage.setItem("theme","light")
}
})

