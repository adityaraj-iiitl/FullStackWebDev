import {  ArrowUpRight } from "lucide-react"
import Text1 from "./text1.jsx"
import Text2 from "./text2.jsx"

const Leftc = () =>
{
    return (
        <div className="w-1/4 py-10 px-10 ml-10">
            <Text1 />
            <Text2 />
            <div className="mt-4">
                 <ArrowUpRight size={50} />
            </div>
        </div>
    )
}

export default Leftc