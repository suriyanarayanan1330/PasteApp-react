import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'

const ViewPaste = () => {
  const {id} = useParams();

  const [title,setTitle] = useState('')
  const [content,setContent]=useState('')

  const allpastes = useSelector((state) => state.paste.pastes);

  useEffect(()=>{
    const pasteElement = allpastes.find((paste)=> paste._id === id)

  if(pasteElement){
    setTitle(pasteElement.title)
    setContent(pasteElement.content)
  }
},[id])

  return (
    <div className='flex justify-center'>

  
    <div className='w-[75%] mt-[50px] flex flex-col gap-5'>
     <div className='flex gap-3.5'>
     <input className='border-2 border-gray-300 focus:border-blue-700 focus:outline-none rounded-sm w-[100%]  p-2 text-center' type="text"
      placeholder='enter title here'
      value={title}
      disabled style={{cursor:'not-allowed'}} />

      

     </div>
     <div>
       <textarea className=' w-[100%] p-2 border-2 border-gray-300 focus:border-orange-300 focus:outline-none h-170 resize-none overflow-auto'
       value={content}
       placeholder='enter content here'
       rows={20}  disabled style={{cursor:'not-allowed'}}/>
   
      
     </div>
    </div>
    </div>
  
  )
}

export default ViewPaste
