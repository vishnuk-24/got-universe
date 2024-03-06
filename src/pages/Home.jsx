import React from 'react'
import NavBar from '../components/NavBar'
import Characters from '../components/Characters'


function Home() {
  return (
    <div className='bg-green-500'>
        <NavBar />
        <Characters />
    </div>
  )
}

export default Home