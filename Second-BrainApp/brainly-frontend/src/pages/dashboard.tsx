import { useState } from 'react'
import '../App.css'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

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
        <div className='flex gap-4 flex-wrap'>
          {contents.map(({type, link, title})=><Card 
            type={type} 
            link={link} 
            title={title}/>
          )}
        </div>
      </div>
    </div>
      

     
    </>
  )
}

