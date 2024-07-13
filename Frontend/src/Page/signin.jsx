import { Button } from "../components/button";
import { Buttonwarming } from "../components/buttonwarming";
import { Heading } from "../components/heading";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/subheading";

export const Signin = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">

        <div className="flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                <Heading label={"Sign In"}></Heading>
                <Subheading label={"Enter your infromation to Sign In"}></Subheading>
                <Inputbox placeholder="xyz@gmail.com" label={"Email"} />
                <Inputbox placeholder="123456" label={"Password"} />
                <div className="pt-4 ">
<Button label={"SignIn"} />
                </div>
                <Buttonwarming label={"Create an Account" } buttontext={"SignUp"} to= {"/Signup"} />
            </div>
        </div>

    </div>
}