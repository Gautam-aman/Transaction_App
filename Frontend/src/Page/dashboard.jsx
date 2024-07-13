import { Appbar } from "../components/appbar";
import { Balance } from "../components/balance";
import { Users } from "../components/user";

export const Dashboard = ()=>{
    return <div>
        <Appbar/>
        <div className="m-8">
            <Balance value ={"10000"} />
            <Users/>
        </div>
    </div>
}