import { useRef } from "react";
function useDebounce(originalfn){
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalfn,200);
  }
  return fn;
}

function App(){
  function sendDataToBakcend(){
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBakcend)

  return (
    <div>
      <input type="text" onChange={debouncedFn} />
    </div>
  )
}

export default App;

//Check the Network after clicking on Inspect in browser