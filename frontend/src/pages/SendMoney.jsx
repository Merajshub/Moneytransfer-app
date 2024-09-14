import { useSearchParams } from "react-router-dom"
import axios from "axios";
import { useState } from "react";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name")
    const [amount, setAmount] = useState(0);

    return <div className=" h-screen flex justify-center">
        <div className=" h-full flex flex-col justify-center">
            <div className=" border h-min text-card-foreground max-w-md p-4 space-y-8 w-96  shadow-lg rounded-lg  ">
                <div className=" flex flex-col items-center y-1.5 p-6">
                    <h2 className="text-3xl font-bold justify-center">Send Money</h2>
                </div>
                <div className="p-6 ">
                    <div className="flex items-center space-x-4  ">
                        <div className="flex items-center justify-center  w-12 h-12 bg-green-400 rounded-full">
                            <span className="text-2xl font text-white ">{name[0].toUpperCase()}</span>
                        </div>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium ">Amount (in Rs)</label>
                            <input onChange={(e) => {
                                setAmount(e.target.value)
                            }} type="number" className=" flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Enter amount" id="amount" />
                        </div>
                        <button onClick={() => {
                            axios.post("http://localhost:3000/api/v1/account/transfer", {
                                to: id,
                                amount
                            }, {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            })

                        }} className="bg-green-500 rounded-md w-full px-3 py-2 text-white">Initiate Transfer</button>


                    </div>

                </div>

            </div>
        </div>



    </div>
}