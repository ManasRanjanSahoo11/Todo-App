import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Todos from '../components/Todos'

function Home() {
  return (
    <div className= 'flex items-start gap-3'>
      <Sidebar />
      <div className='w-[100%]'>
        <Header/>
        <Todos/>
      </div>
    </div>
  )
}

export default Home
