//Ugly Code
// import React, { useState } from 'react';

// function Stopwatch(){
//   const [time, setTime] = useState(0);
//   const [timer,setTimer] = useState(0);
//   function startClock(){
//     let value = setInterval(function(){
//       setTime(c=>c+1);
//     },1000);
//     setTimer(value);
//   }
//   function stopClock(){
//     console.log(timer);
//     clearInterval(timer);
//   } 

//   return (
//     <div>
//       <h1>Timer: {time}</h1>
//       <button onClick={startClock}>Start</button>
//       <button onClick={stopClock}>Stop</button>
//     </div>
//   );
// }


// export default Stopwatch;

//useRef for stopwatch (better code)

import React, { useState, useRef } from 'react';

function stopwatch(){
  const [currentCount,setcurrentCount] = useState(0);
  const timer = useRef();

  function startClock(){
    const value = setInterval(function(){
      setcurrentCount(c=>c+1);
    },1000)
    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current);
    timer.current = null;
  }

  return (
  <div>
    <h1>Timer: {currentCount}</h1>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
)
}


export default stopwatch;

// Scroll to bottom
// import React, { useEffect, useRef, useState } from 'react';

// function Chat() {
//   const [messages, setMessages] = useState(["Hello!", "How are you?"]);
//   const chatBoxRef = useRef(null);

//   // Function to simulate adding new messages
//   const addMessage = () => {
//     setMessages((prevMessages) => [...prevMessages, "New message!"]);
//   };

//   // Scroll to the bottom whenever a new message is added
//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//       <div 
//         ref={chatBoxRef} 
//         style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <button onClick={addMessage}>Add Message</button>
//     </div>
//   );
// }

// export default Chat;
