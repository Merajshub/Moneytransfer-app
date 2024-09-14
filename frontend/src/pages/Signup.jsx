
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox} from "../components/InputBox";
import { Button } from  "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
export const Signup = ()=>{
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className=" flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label = {"Signup"}></Heading>
        <SubHeading label={"Enter your information to create an account"}/>
        <InputBox onChange={e=>{setfirstName(e.target.value)}} placeholder= "John" label = {"First Name"} />
        <InputBox onChange={e=>{setlastName(e.target.value)}} placeholder = "Don" label = {"Last Name"} />
        <InputBox onChange={e=>{setUsername(e.target.value)}} placeholder = "xyz@gmail.com" label = {"Email"} />
        <InputBox onChange={e=>{setPassword(e.target.value)}} placeholder = "****" label = {"Password"} />
        <div className="pt-4">
       <Button  onClick = {async ()=>{
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username:username,
            firstName:firstName,
            lastName:lastName,
            password:password

        });
        localStorage.setItem("token",response.data.token)
        // for clearing token when you click logout 
        // localStorage.removeItem("token")
       }} label = {"Sign Up"}/>
       </div>
       <BottomWarning label= {"Already have an account?"} buttonText = {"Sign in"} to = {"/signin"} />






        </div>
        </div>
</div>

}