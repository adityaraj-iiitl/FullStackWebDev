var ob1={
    name:"krishna",
    forms:{
        kalyug:"kalki",
        dwaparyuga:"Krishna",
        satyuga:"ram"
    }
}
function deepCopy(obj)
{
    if(typeof obj !== "object" || obj===null){
       return obj;
    }
    let copiedvals=Array.isArray(obj)?[]:{};
    let keys= Object.keys(obj);

    for(let j=0;j<keys.length;j++)
    {
        copiedvals[keys[j]]=deepCopy(obj[keys[j]]);
    }
    return copiedvals;
}

var obj2=deepCopy(ob1)