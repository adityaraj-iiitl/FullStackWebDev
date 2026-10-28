let form=document.querySelector("form")
let inputs=document.querySelectorAll("input")
let nameerr=document.querySelector(".nameerr")
let emailerr=document.querySelector(".emailerr")
let passerr=document.querySelector(".passerr")

//we can validate emails , passwords and names and others using regular expressions or regex


form.addEventListener("submit",function(e){
    let a=true;
    let b=true;
    let c=true;

   let name=inputs[0].value
    if(name.length <= 2)
    {
        nameerr.style.display="initial";
        c=false;
    }else
    {
        nameerr.style.display="none"
    }

    let email=inputs[1].value;
    const regex=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!(regex.test(email)))
    {
        emailerr.style.display="initial";
        b=false;
    }else
    {
        emailerr.style.display="none";
    }
    let password=inputs[2].value;
let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])(?=\S{8,}).*$/;
    if(passwordRegex.test(password))
    {
        passerr.style.display="none";
    }else
    {
        c=false;
        passerr.style.display="initial";
    }
    if(!(a && b && c))
    {
        e.preventDefault();
    }
})