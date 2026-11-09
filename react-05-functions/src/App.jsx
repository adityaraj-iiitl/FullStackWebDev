import "./index.css"
import React from "react";
import { useState } from "react";
function App()
{
  const [num,setNum] = useState(0);
  function increase()
  {
    setNum(num+1);
  }
  function decrease()
  {
    setNum(num-1)
  }
  let lastval =0;
  function wantIn(elem){
    const val = Number(elem.target.value)

    if(elem.target.value !== "")
    {
       if(val > lastval)
       {
        setNum(num+val)
        lastval=val
       }else
       {
        setNum(num-lastval)
        lastval=val
       }
    }
  }
  const [arr,setarr] = useState({name: "aditya raj" , age:23});
  function changearr(){
    let narr={...arr};
    narr.name="krishna";
    setarr(narr);
    console.log(arr.name);
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(e.target.elements[0].value)
  }
   const [title,setTitle] =useState("");
  return(
    <>
   <div className="dive">
    <h1>{num}</h1>
   </div>
   <div className="divi2">
     <button onClick={increase}>Increase</button>
     <button onClick={decrease}>Decrease</button>
     <input type="number" onChange={wantIn} onClick={changearr}/>
   </div>
   <form onSubmit={(e)=>{
    submitHandler(e)
   }}>
     <input type="text" className="form" value={title} onChange={(e)=>{
         setTitle(e.target.value);
         console.log(title)
     }}/>
     <input type="submit" />
   </form>
   </>
  )
}

export default App;