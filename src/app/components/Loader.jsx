import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full border-t-4 border-red-500 border-solid w-10 h-10'></div>
    </div>
  )
}

export default Loader