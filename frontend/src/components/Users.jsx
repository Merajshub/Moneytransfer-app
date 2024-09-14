import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users =()=>{
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("")
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" +filter).then(response=>{
           setUsers(response.data.user)
        })

    },[filter])
    return <div className="p-4">
        <div className="font-bold text-lg text-slate-900">Users</div>
        <div>
            <input onChange={(e)=>{
                setFilter(e.currentTarget.value)
            }} type="text" placeholder="Search Users..."className="w-full border rounded border-slate-200 px-2 py-1 max-w-md" />
        </div>
        <div>
            {users.map(user =><User user={user}/>)}
        </div>
         

    </div>
}

function User ({user}){
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
        <div className=" flex justify-center rounded-full h-12 w-12 bg-slate-200 my-4 ml-2">
            <span className="flex flex-col  justify-center h-full text-xl">
                {user.firstName[0].toUpperCase()}
            </span>
        </div>
        <div className="flex flex-col justify-center ml-2 h-full">
        <div>
            {user.firstName} {user.lastName}
        </div>
        </div>
        </div>
        <div className="flex flex-col justify-center ">
            <Button onClick={()=>{
                navigate("/send?id="+user._id +"&name="+ user.firstName)
            }} label={"Send Money"}></Button>
        </div>
        
        

    </div>
}

{/* <BottomWarning label= {"Already have an account?"} buttonText = {"Sign in"} to = {"/signin"} /> */}