import React from 'react'
import AddCardForm from '../components/AddCardForm'
// import Quizes from '../components/Quizes'
const Dashboard = () => {
  return (
    <div className='py-16 h-screen px-36 flex flex-col gap-10'>
      <div className='w-full'>
        <AddCardForm />
      </div>
      {/* <div className='w-full'>
        <Quizes />
      </div> */}
    </div>
  )
}

export default Dashboard