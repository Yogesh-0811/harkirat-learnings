import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { useRef } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
        })
        alert("You have signed up !!")
        navigate("/Signin");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border-gray-500 min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex justify-center p-4 border-gray-500">
                <Button onClick={signup} variant="primary" text="Signup" fullWidth={true}/>
            </div>
        </div>
    </div>
}