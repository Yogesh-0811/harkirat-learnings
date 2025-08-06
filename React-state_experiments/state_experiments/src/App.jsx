//Rolling up the state .... State Management 

import { useState } from 'react';

function App(){
  // const [ bulbOn, setBulbOn ] = useState(true); --------- prop drilling ----------
  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
  const [ bulbOn, setBulbOn ] = useState(true);
  return <div>  
    {/* bulbOn is a prop to the Bulb State component
        bulbOn, setBulbOn are props to the ToggleBulbState component */}
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function BulbState({bulbOn}){
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}){
  function toggle(){
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>
      Toggle the bulb
    </button>
  </div>
}
export default App;

//Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components Jargon-> 1. Context - React.createContext(), 2. ProviderThis component wraps part of application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context, 3. Consumer: This component subscribes to context changes. It allowes us to access the context value(using useContext hook)