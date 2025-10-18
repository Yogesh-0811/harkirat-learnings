"use client";

import {useState} from "react";

export default function Good(){
    const [count,setCount] = useState(0);

    return <div>
        hello
        <button onClick={()=>{
            setCount(c=>c+1);
        }}>Click me! {count}</button>
    </div>
}

//Cannot be a server component