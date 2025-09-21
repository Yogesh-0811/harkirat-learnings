import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signin(){

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try{
            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            });
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            alert("Signed in successfully!");
            navigate("/dashboard");
        }catch(err:any){
            console.error("Signin error: ", err.response?.data || err.message);
            alert("Signin failed: "+ (err.response?.data?.message || err.message));
        }
        
    }
    
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border-gray-500 min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex justify-center p-4 border-gray-500">
                <Button onClick={signin} variant="primary" text="Signin" fullWidth={true}/>
            </div>
        </div>
    </div>
}