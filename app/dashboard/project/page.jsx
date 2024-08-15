import FileUpload from '@/app/Components/FileUpload'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto p-2'>
      <FileUpload/>
      <div >
          <h1 className='text-white text-4xl font-poppins-bold'>Recent Projects</h1>
      </div>
    </div>
  )
}

export default page