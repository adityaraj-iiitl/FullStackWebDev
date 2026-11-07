
import Card from "./components/card/card";

function App(){
  
  const data = [
    {
        name: "Aditya",
        picture: "https://i.pravatar.cc/300?img=12"
    },
    {
        name: "Rahul",
        picture: "https://i.pravatar.cc/300?img=13"
    },
    {
        name: "Priya",
        picture: "https://i.pravatar.cc/300?img=47"
    },
    {
        name: "Aman",
        picture: "https://i.pravatar.cc/300?img=14"
    },
    {
        name: "Sneha",
        picture: "https://i.pravatar.cc/300?img=45"
    },
    {
        name: "Rohan",
        picture: "https://i.pravatar.cc/300?img=15"
    },
    {
        name: "Ananya",
        picture: "https://i.pravatar.cc/300?img=49"
    },
    {
        name: "Karan",
        picture: "https://i.pravatar.cc/300?img=16"
    },
    {
        name: "Neha",
        picture: "https://i.pravatar.cc/300?img=44"
    },
    {
        name: "Vikram",
        picture: "https://i.pravatar.cc/300?img=17"
    }
];
  return(
    <>
      {
       data.map(function(user){
        return (
        <Card name={user.name} key={user.name.last} src={user.picture}/>
       )
       })
      }
    </>
  )
}

export default App