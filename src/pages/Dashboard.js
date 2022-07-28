import React from 'react'
import AddCardForm from '../components/AddCardForm'

const Dashboard = () => {
  return (
    <div className='py-16 h-screen px-36 flex gap-10'>
      <div className='w-full'>
        <AddCardForm />
      </div>
    </div>
  )
}

export default Dashboard