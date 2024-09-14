import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"





export const Signin = ()=>{
return <div className="bg-slate-300 h-screen flex flex justify-center">
    <div className=" flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
    <Heading label = {"Signin"}></Heading>
    <SubHeading label={"Enter your information to login to your account"}/>
    <InputBox onChange={e=>{e.target.value}} placeholder = "xyz@gmail.com" label = {"Email"} />
    <InputBox onChange={e=>{e.target.value}} placeholder = "****" label = {"Password"} />
    <Button label = {"Sign Up"}/>
    <BottomWarning label= {"Don't have an account?"} buttonText = {"Sign up"} to = {"/signup"} />
    </div>
    </div>

    

</div>
}