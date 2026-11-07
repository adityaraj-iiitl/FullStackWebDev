import Rightc from './rightcontent.jsx'
import Leftc from './leftcontent.jsx'

const Page1 =()=>{
    return (
        <div className="h-full w-full py-10 px-10 flex gap-5">
            <Leftc />
            <Rightc />
        </div>
    )
}

export default Page1