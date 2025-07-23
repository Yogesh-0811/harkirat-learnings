import { useState } from "react";

export function NotificationBell() {
    const [count, setCount] = useState(1);

    function increaseCount(){
        setCount(count+1);
    }
    return <div>
        <div style={{display:"flex"}}>
            <div style ={{background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5, paddingDown:5}}>
                {count}
            </div>
        </div>
        <img style={{cursor:"pointer", paddingTop: 5}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTr1BJyX3kDbHEudjKiMaRRB6-k1lar6Q3gw&s"} width={40} ></img>
        <button onClick={increaseCount}>Increase count</button>
    </div>
}