import React from 'react';
import './App.css';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState} from 'recoil';
import { counterAtom } from './store/atoms/counter';
import { evenSelector } from './store/atoms/counter';

function App(){

  return(
    <RecoilRoot>
        <Buttons/>
        <Counter />
        <IsEven/>
    </RecoilRoot>
  )
}

function Buttons(){
    const setCount = useSetRecoilState(counterAtom);

    function Increase(){
        setCount(c=>c+2)
    }

    function Decrease(){
        setCount(c=>c-1)
    }

    return <div>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
    </div>
}

function Counter(){
    const count = useRecoilValue(counterAtom);
  return(
    <div>
      {count};
    </div>
  )
}

function IsEven(){
    const even = useRecoilValue(evenSelector);

    return <div>
        {even ? "Even":"Odd"}
    </div>
}

export default App;