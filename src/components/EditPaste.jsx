import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateToPastes } from "../features/counter/pasteSlice";

const EditPaste = () => {
    
  const { id } = useParams();
 

  const allpastes = useSelector((state) => state.paste.pastes);

  const pasteElement = allpastes.find((paste) => paste._id === id);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(()=>{
     setContent(pasteElement.content)
     setTitle(pasteElement.title)
  },[id])
  
  const dispatch = useDispatch()

  function updatePaste(){
    
     const Editedpaste = {...pasteElement, title:title, content:content}

     console.log(Editedpaste.content)
     console.log(Editedpaste.title)
     
     dispatch(updateToPastes(Editedpaste))

  }

  return (
    <div className="flex justify-center">

    
     <div className="w-[75%] flex flex-col gap-5 mt-[50px]">
      <div className="flex justify-between">
        <input
         className='border-2 border-gray-300 focus:border-blue-700 focus:outline-none rounded-sm w-[80%]  p-2 '
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) =>setTitle(e.target.value)}
        />

        <button
          onClick={updatePaste}
         className='rounded-sm  font-normal text-white  bg-blue-500 cursor-pointer p-2 h-[40px] text-sm  w-[15%]'
        >
          Update My Paste
        </button>
      </div>
      <div>
        <textarea
          className=' w-[100%] p-2 border-2 border-gray-300 focus:border-orange-300 focus:outline-none h-170 resize-none overflow-auto'
          value={content}
          placeholder="enter content here"
          onChange={(e) =>setContent(e.target.value)}
          rows={20}
        />
      </div>

      
      </div>
    </div>
  );
};

export default EditPaste;
