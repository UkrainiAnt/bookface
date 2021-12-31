import { DotsHorizontalIcon } from '@heroicons/react/outline'
import React from 'react'

const ProfileSelect = () => {
  return (
    <div className='flex items-center justify-between pt-4'>

    <div className='flex items-center flex-grow'>

      <span className='hover:bg-blue-200 rounded-none text-blue-600  border-blue-600 select_tab'>Pubications</span>

      <span className='hover:bg-gray-200 text-gray-600 select_tab'>Information</span>

      <span className='hover:bg-gray-200 text-gray-600 select_tab'>Friends</span>

      <span className='hover:bg-gray-200 text-gray-600 select_tab'>Photos</span>

      <span className='hover:bg-gray-200 text-gray-600 select_tab'>Videos</span>

      <span className='hover:bg-gray-200 text-gray-600 select_tab'>Visits</span>

    </div>

    <div className='p-[7px] mr-4 px-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all duration-200 cursor-pointer'>

      <DotsHorizontalIcon className='h-6 w-6' />

    </div>
  
  </div>
  
  )
}

export default ProfileSelect
