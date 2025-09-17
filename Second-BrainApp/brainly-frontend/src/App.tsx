import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { CreateContentModel } from './components/ui/CreateContentModel'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Sidebar } from './components/ui/Sidebar'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <Sidebar/>
    <div className='p-4 ml-72 min-h-screen bg-gray-200 border-2 border-gray-200'>
      <CreateContentModel open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
      <div>
        <div className='flex justify-end gap-4'>
          <Button onClick={()=>{setModalOpen(true)}} startIcon={<PlusIcon size='md'/>} size="md" variant='primary' text='Add Content'/>
          <Button startIcon={<ShareIcon size='md'/>} size="md" variant='secondary' text='Share Brain'/>       
        </div>
        <div className='flex gap-4'>
          <Card type="twitter" link='https://x.com/prasadtwts/status/1924862023323783540' title='Harkirat SOL'/>
          <Card type="youtube" link='https://www.youtube.com/watch?v=y8qIA4yCH7Y' title='ezsnip Video'/>
        </div>
      </div>
    </div>
      

     
    </>
  )
}

export default App
