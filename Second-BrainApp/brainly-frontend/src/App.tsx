import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <Button startIcon={<PlusIcon size="md"/>} size="sm" endIcon={<ShareIcon size='md'/>} variant='primary' text='Share'/>
      <Button size="md" variant='secondary' text='Add Content'/>
      <Button size="lg" variant='secondary' text='Add Content'/>
    </>
  )
}

export default App
