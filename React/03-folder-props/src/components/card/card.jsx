import "./card.css"

function Card(props){
  return (
   
        <div className="card">
      <img src={props.src} alt="" />
      <h1>{props.name}</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, praesentium!</h3>
      <button>View Profile</button>
    </div>
  )
}

export default Card