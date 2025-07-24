//---------------List and keys---------------

import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

//Inline Styling {{}}
function MyComponent() {
  return (
    <div style={{ backgroundColor: 'blue', color: 'white' }}>
      Hello, World!
    </div>
  );
}

const App = () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return <ItemList items={items} />;
};

export default App

//------------Class based-------------

// import React, { Component } from 'react';

// class ClassCounter extends Component {
//     state = { count: 0 };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }

//------------------Functional Components-------------------

// import React, { useState } from 'react';

// const FunctionalCounter = () => {
//     const [count, setCount] = useState(0);
    
//     function increment() {
// 	    setCount(count => count + 1)
//     }

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// };

//------------------LifeCycle Events---------------------
// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Component mounted or count updated');

//   }, [count]); // Runs on mount and when count changes

// 	useEffect(() => {
// 		    console.log('Component mounted');
//     return () => {
//       console.log('Component will unmount');
//     };
// 	}, [])

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

//--------------------Error Boundary------------------
// import React from 'react';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }

//     componentDidCatch(error, info) {
//         console.error("Error caught:", error, info);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong.</h1>;
//         }

//         return this.props.children; 
//     }
// }

// const BuggyComponent = () => {
//     throw new Error("I crashed!");
// };

// const App = () => {
//     return (
//         <ErrorBoundary>
//             <BuggyComponent />
//         </ErrorBoundary>
//     );
// };


//-------------------Fragments---------------

// const MyComponent = () => {
//     return (
//         <>
//             <h1>Hello</h1>
//             <p>World</p>
//         </>
//     );
// };