import { usePrev } from "./hooks/use-Prev";
import { useState } from "react";

function App(){
  const [state, setState]= useState(0);
  const prev = usePrev(state);

  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>{setState(curr=>curr+1)}}>Click Me</button>
      <p>The previous value was {prev}</p>
    </div>
  )
}

export default App;