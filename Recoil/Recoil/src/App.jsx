import React from 'react';
import './App.css';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState} from 'recoil';
import { counterAtom } from './store/atoms/counter';

function App(){

  return(
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter(){

  return(
    <div>
      <CurrentCount/>
      <Increase/>
      <Decrease/>    
    </div>
  )
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom); 
  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={() => setCount(c=>c - 1)}>
      Decrease
    </button>
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={() => setCount(c=>c + 1)}>
      Increase
    </button>
  </div>
}

export default App;