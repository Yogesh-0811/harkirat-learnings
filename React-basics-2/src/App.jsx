import { useState } from "react";

function App() {

  return (
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
      <NotificationMessage />
      <NotificationMessage2 />
    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); // defining a new state variable
  
  //When the value of a state variable changes,
  // the component that uses the state variables re-renders
  return (
    <div>
      <button onClick={()=>setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rerendered</p>}
    </div>
  );
};

const NotificationMessage = () => {
  let [ notificationCount, setNotificationCount ] = useState(0);
  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount+1);
  }

  return(
    <div>
      <button onClick={increment}>
        Increase count
      </button>
      {notificationCount}
    </div>
  );
};

const NotificationMessage2 = () => {
  let [ notificationCount, setNotificationCount ] = useState(0);
  console.log("re-render");
  function decrement() {
    setNotificationCount(notificationCount-1);
  }

  return(
    <div>
      <button onClick={decrement}>
        Decrease count
      </button>
      {notificationCount}
    </div>
  );
};



export default App
