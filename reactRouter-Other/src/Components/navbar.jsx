import "./navbar.css"
import { Link } from "react-router-dom"

function Navbar(){
    return (
        <>
         <div className="nav">
            <h1>Hare <br /> Krishna App</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
         </div>
        </>
    )
}

export default Navbar