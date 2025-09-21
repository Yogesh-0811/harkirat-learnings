// import { useState } from "react";
import { useRef } from "react";
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import { useState } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType{
    Youtube = "youtube",
    Twitter = "twitter"
}

//controlled component
export function CreateContentModel({open, onClose, onContentAdded}){

    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube)

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        });
        onContentAdded?.(data);
        onClose();
    }

    return <div>
        {open && <div className="fixed inset-0 flex items-center justify-center bg-slate-500/60 z-50">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon/>
                        </div>                      
                    </div>
                    <div>
                        <Input ref={titleRef} placeholder={"Title"}/>
                        <Input ref={linkRef} placeholder={"Link"}/>
                    </div>
                    <div>
                        <h1>Type</h1>
                        <div className="flex gap-1 p-4">
                            <Button text="Youtube" variant={type===ContentType.Youtube? "primary": "secondary"} onClick={()=>{
                                setType(ContentType.Youtube)
                            }}></Button>
                            <Button text="Twitter" variant={type===ContentType.Twitter? "primary": "secondary"} onClick={()=>{
                                setType(ContentType.Twitter)
                            }}></Button>
                        </div>
                       
                    </div>
                    <div className="flex justify-center">
                      <Button onClick={addContent} variant="primary" text="Submit"/>
                    </div>

                </span>
            </div>
            </div>}
    </div>
}

