import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function(){
    let clock = setInterval(function(){
      setCounterVisible(c=>!c)
    },5000);
  }, [])

  return <div>
    <b>hi there</b>
    {/* {counterVisible && <Counter></Counter>} */}
    <div style={{visibility: counterVisible ? "visible" : "hidden"}}><Counter></Counter></div>
  </div>
}

function Counter(){

    const [count,setCount] = useState(0);
    console.log("counter");
  //clearInterval

    useEffect(function(){
      console.log("on mount");
      let clock=setInterval(function(){
        console.log("from inside the interval");
        setCount(c=>c+1)
      }, 1000);
      return function(){
        console.log("on unmount");
        clearInterval(clock)
      }
    },[])
    
    function increaseCount(){
      setCount(count+1);
    }


  // function decreaseCount(){
  //   setCount(count-1);
  // }

  // function resetCount(){
  //   setCount(0);
  // }


  // setInterval(function(){
  //   setCount(count+1);
  // },1000)

  //hooking into the lifecycle events of react
  //mounting, re-rendering, unmounted - lifecycle events
  // useEffect(function(){
  //   setInterval(function(){
  //     setCount(function(count){
  //       return count+1;
  //     })
  //   },1000)
  // },[]); //dependency array

  return <div>
    <h1 id='text'>{count}</h1>
    {/* <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset Count</button> */}
  </div>
}

export default App
