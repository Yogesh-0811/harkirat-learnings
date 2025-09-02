import './App.css'
import {RecoilRoot, useRecoilValue} from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
import { useMemo } from 'react'

function App() {
  return (<RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const NotificationsAtomCount = useRecoilValue(notificationAtom);
  const MessagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(()=>{
  //   return networkNotificationCount + jobsAtomCount + NotificationsAtomCount + MessagingAtomCount;
  // },[networkNotificationCount, jobsAtomCount, NotificationsAtomCount, MessagingAtomCount])

  return (
    <>
      <button>Home</button>
      <button>My network({networkNotificationCount>=100?"99+":networkNotificationCount})</button>
      <button>Jobs({jobsAtomCount})</button> 
      <button>Messaging({MessagingAtomCount})</button>
      <button>Notifications({NotificationsAtomCount})</button>

      <button>Me({totalNotificationCount})</button>
    </>
  )
}

export default App
