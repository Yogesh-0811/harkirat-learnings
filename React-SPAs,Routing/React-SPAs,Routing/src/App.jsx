import './App.css'
import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App(){
//-------------------useRef------------------------------------
  // Step 1: Create a ref to store the input element
  const inputRef = useRef(null);

  // Step 2: Define the function to focus the input
  const handleFocus = () => {
    // Access the DOM node and call the focus method
    inputRef.current.focus();
  };

  
  return <div>
    Bakliwal | Class 11 | Class 12 (This stays at top)
    <div>
      {/* Step 3: Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/jee" element={<Layout/>}></Route> */}
        <Route path="/jee/online-coaching-class-11" element={<Class11Program/>}></Route>
        <Route path="/jee/online-coaching-class-12" element={<Class12Program/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

// function Layout(){
//   return <div>
//     <Header/>
//     <div>
//       <Outlet/>
//     </div>
//     footer
//   </div>
// }

function Landing(){
  return <div>
    Welcome to Bakliwal
  </div>
}

function Class11Program(){
  return <div>
    Jee programs for class 11
  </div>
}

function Class12Program(){
  return <div>
    Jee programs for class 12
  </div>
}
export default App