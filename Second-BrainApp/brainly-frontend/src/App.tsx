import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <div className='p-4'>
        <div className='flex justify-end gap-4'>
          <Button startIcon={<ShareIcon size='md'/>} size="md" variant='secondary' text='Share Brain'/>
          <Button startIcon={<PlusIcon size='md'/>} size="md" variant='primary' text='Add Content'/>
        </div>
        <div className='flex gap-4'>
          <Card type="twitter" link='https://x.com/prasadtwts/status/1924862023323783540' title='Harkirat SOL'/>
          <Card type="youtube" link='https://www.youtube.com/watch?v=y8qIA4yCH7Y' title='ezsnip Video'/>
        </div>
      </div>

     
    </>
  )
}

export default App
