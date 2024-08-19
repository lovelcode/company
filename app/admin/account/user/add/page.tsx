
import AddUser from '@/app/_components/panel/allApp/account/user/AddUser'
import Applications from '@/app/_components/panel/Applications'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-12 gap-4 p-5'>
        <div className='r lg:col-span-4 hidden lg:block'>
            <Applications></Applications>
        </div>
        <div className='l lg:col-span-8'>
            <AddUser></AddUser>
        </div>
    </div>
    </div>
  )
}

export default page
