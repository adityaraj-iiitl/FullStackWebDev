import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/navbar.jsx'
import Home from './Components/home.jsx'
import About from './Components/about.jsx'
import Contact from './Components/contact.jsx'
import ContactDet from "./Components/contactdet.jsx"

function App(){
    return (
        <>
         
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/contact/:id" element ={<ContactDet />} />
            </Routes>
        </>
    )
}

export default App