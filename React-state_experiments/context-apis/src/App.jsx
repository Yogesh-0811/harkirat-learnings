import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;

// -------------------- Introducing RECOIL -------------------

// import React, { createContext, useContext, useState } from 'react';
// import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

// const count = atom({
//   key: 'countState', // unique ID (with respect to other atoms/selectors)
//   default: 0, // default value (aka initial value)
// });

// function Parent() {
//   return (
//     <RecoilRoot>
//       <Incrase />
//       <Decrease />
//       <Value />
//     </RecoilRoot>
//   );
// }

// function Decrease() {
//   const setCount = useSetRecoilState(count);
//   return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
// }

// function Incrase() {
//   const setCount = useSetRecoilState(count);
//   return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
// }

// function Value() {
//   const countValue = useRecoilValue(count);
//   return <p>Count: {countValue}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;