import {Link} from "react-router-dom"

export function Buttonwarming({label , buttontext , to}){
    return <div className="py-2 text-sm flex justify-center">
        <div>{label}</div>
        <Link className="cursor-pointer underline pl-1 pointer" to = {to}>{buttontext}</Link>
    </div>
}