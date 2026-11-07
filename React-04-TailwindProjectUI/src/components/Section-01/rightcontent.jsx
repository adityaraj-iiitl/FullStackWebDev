import React from "react";
import Card from "./Card/Card.jsx";

const Rightc= () =>{
   const data = [
    {
        id: 1,
        title: "Prime customers",
        description: "Prime customers that have access to bank credit and are satisfied with the current product",
        status: "Satisfied",
        color: "bg-blue-500",
        image: "https://images.pexels.com/photos/9383916/pexels-photo-9383916.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        title: "Prime customers",
        description: "Prime customers that have access to bank credit and are not satisfied with the current service",
        status: "Underserved",
        color: "bg-blue-500",
        image: "https://images.pexels.com/photos/21358479/pexels-photo-21358479.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 3,
        title: "Customers",
        description: "Customers from near-prime and sub-prime segments with no access to bank credit",
        status: "Underbanked",
        color: "bg-lime-400",
        image: "https://images.pexels.com/photos/8261574/pexels-photo-8261574.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];
    return (
        <div className="w-3/4  py-10 flex items-center gap-8 ml-20">
             {
                data.map(function(user){
                    return <Card id={user.id} title={user.title} description={user.description} status={user.status} color={user.color} image= {user.image}/>
                })
             }
        </div>
    )
}

export default Rightc
