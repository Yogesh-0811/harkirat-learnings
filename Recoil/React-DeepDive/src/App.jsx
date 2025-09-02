
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      <strong>{todo.title}</strong>
      <p>{todo.completed?"Done":"Not Done"}</p>
      <br />
    </>
  )
}

export default App