//Rolling up the state .... State Management 

import { createContext, useContext, useState } from 'react';

//ideally store in separate file 
const bulbContext = createContext();

function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(true);
  return (<bulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </bulbContext.Provider>
  );
}

function App(){
  return <div>
    <BulbProvider>
      <Light/>
    </BulbProvider>
  </div>
}

function Light(){
  // const [ bulbOn, setBulbOn ] = useState(true);
  return <div>  
    {/* bulbOn is a prop to the Bulb State component
        bulbOn, setBulbOn are props to the ToggleBulbState component */}
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb(){
  const { bulbOn } = useContext(bulbContext);
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function LightSwitch(){
  const { bulbOn , setBulbOn} = useContext(bulbContext);
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