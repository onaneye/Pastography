"use client"
import React, { useState } from 'react'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FileUploadModal from './FileUploadModal'

const FileUpload = () => {
    const [modal, setModal] = useState(false)

  return (
    <>
        {modal && (
          <div className='bg-black/15 h-screen w-screen z-50 fixed flex justify-center items-start' >
            <div className='bg-white p-5 w-[700px] my-12  shadow-2xl rounded-lg relative'>
             <span className='bg-red-600 px-4 py-2 rounded-tr-lg text-white text-2xl font-bold 
               cursor-pointer hover:bg-red-500 top-0 right-0 absolute' 
               onClick={(e)=>{setModal(false)}}
              >
              x
              </span>
                <h1 className='text-black font-poppins-bold text-2xl font-bold text-center'>Image Upload Form</h1>
                <FileUploadModal/>
            </div>
          </div>
        )}
        <div className='bg-gray-800 w-72 h-72 p-4 mb-[15%]'>
          <div className='flex flex-col flex-1 justify-center items-center gap-y-2 w-full h-full'>
              <FontAwesomeIcon icon={faPlusCircle} size='6' className='text-5xl text-white cursor-pointer hover:text-gray-400' onClick={(e)=> {setModal(true)}} />
              <h3 className='text-white text-2xl font-poppins-bold'>Create new</h3>
          </div>
      </div>
      
    </>
  )
}

export default FileUpload