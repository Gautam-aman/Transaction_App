import { Button } from "../components/button";
import { Buttonwarming } from "../components/buttonwarming";
import { Heading } from "../components/heading";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">

        <div className="flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                <Heading label={"Sign Up"}></Heading>
                <Subheading label={"Enter your infromation to create an account"}></Subheading>

                <Inputbox onChange={e=>{
                    setFirstName(e.target.value)
                }} placeholder="Aman" label={"First Name"} />

                <Inputbox onChange={e=>{
                    setLastName(e.target.value)
                }} placeholder="Gautam" label={"Last Name"} />

                <Inputbox onChange={e=>{
                    setUsername(e.target.value)
                }} placeholder="xyz@gmail.com" label={"Email"} />

                <Inputbox onChange={e=>{
                    setPassword(e.target.value)
                }} placeholder="123456" label={"Password"} />
                <div className="pt-4 ">
<Button onClick={async () =>{
    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
        username, 
        firstName,
        lastName, 
        password
    });
    localStorage.setItem("token" , response.data.token)
    navigate("/dashboard")
}} label={"Signup"} />
                </div>
                <Buttonwarming label={"Already have an account?" } buttontext={"Signin"} to= {"/signin"} />
            </div>
        </div>

    </div>
}