import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { addToPastes } from '../features/counter/pasteSlice'

const Home = () => {
  const [title,setTitle] = useState('')
  const [value,setValue] = useState('')
  const [searchParams,setsearchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")

  const dispatch = useDispatch()

  function createPaste(){
     const paste = {
        title : title,
        content : value,
        _id : pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString()
     }

     if(pasteId){
       
      // updation
       dispatch(updateToPastes(paste))
     }
     else{
      // creation
      dispatch(addToPastes(paste))
     }

     setTitle("")
     setValue("")
     setsearchParams('')
  }

  return (
    <div className='flex justify-center'>
      <div className='w-[80%]'>

      
     <div className='flex gap-3.5 h-[70px] items-center justify-between'>
     <input className='border-2 border-gray-300 focus:border-blue-700 focus:outline-none rounded-sm w-[80%]  p-2 ' type="text"
      placeholder='Title'
      value={title}
      onChange={(e)=>setTitle(e.target.value) }/>


      <button onClick={createPaste} className='rounded-sm  font-normal text-white  bg-blue-500 cursor-pointer p-2 h-[40px] text-sm  w-[15%]' disabled={(title.trim() === '') && (value.trim() === '')}>
        {
          pasteId ? "update my paste":"Create My Paste"
        }
      </button>

     </div>
     <div className='flex justify-center flex-col'>
    
       <textarea className=' w-[100%] p-2 border-2 border-gray-300 focus:border-orange-300 focus:outline-none h-170 resize-none overflow-auto'
       value={value}
       placeholder='Write Your Content Here.....'
       onChange={(e)=> setValue(e.target.value)}
       >
      </textarea>
     </div>
     </div>
    </div>

    
  )
}

export default Home
