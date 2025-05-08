import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeFromPastes } from "../features/counter/pasteSlice";

const Paste = () => {
  const allpastes = useSelector((state) => state.paste.pastes);

  const [searchvalue, setSearchvalue] = useState("");

  const filteredPastes = allpastes?.filter((paste) =>
    paste.title.toLowerCase().includes(searchvalue.toLowerCase())
  );

  const navigate = useNavigate();

  function view(id) {
    navigate(`/pastes/${id}`);
  }

  function edit(id) {
    navigate(`/editpaste/${id}`);
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
  }

  const dispatch = useDispatch();

  function handledelete(pasteid) {
    console.log(pasteid);
    dispatch(removeFromPastes(pasteid));
  }

  function formatedDate(isoDate){

    const date = new Date(isoDate);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString("default",{month : 'long'});
    
    const suffix = (d)=>{
      if(d>3 && d<21) return 'th'
        switch(d%10){
          case 1 : return 'st';
          case 2 : return 'nd';
          case 3 : return 'rd';
          case 4 : return 'th';
          default : return 'th';
        }
    }

    return `${day}${suffix(day)} ${month} ${year}`
  }

  return (
    <div className="flex justify-center">
      <div className="w-[70%] flex flex-col">
        <br />
        <input
          className="border-2 border-gray-300 focus:border-blue-700 focus:outline-none w-[100%] p-1 rounded-sm mt-4 placeholder:text-[14px]"
          type="text"
          placeholder="Search Paste Here...."
          value={searchvalue}
          onChange={(e) => setSearchvalue(e.target.value)}
        />

        {/* displaying all the paste */}

        <div className="w-[100%] border-2 border-gray-300 border-b-transparent p-4 text-4xl font-bold mt-[35px]">
          All Pastes
        </div>
        <div className="p-5 border-2 border-gray-300">
          <ul className="flex flex-col gap-4">
            {allpastes.length > 0 && filteredPastes.length > 0 ? (filteredPastes.map((paste) => (
                <div
                  key={paste._id}
                  className="border-2 border-gray-300 p-3 flex justify-between h-[200px] hover:border-orange-600 overflow-hidden"
                >
                  <div className="flex flex-col gap-3 w-[80%]">
                    <div className="text-3xl font-bold">{paste.title}</div>
                    <textarea rows={5} value={paste.content} className="focus:outline-none resize-none overflow-clip"></textarea>
                    <div></div>
                  </div>
                  
                  <div className="flex flex-col gap-3">

                 
                  <div className="buttons flex flex-row gap-4 h-[30px]">
                    <button
                      className="cursor-pointer border  border-gray-300 hover:scale-110"
                      onClick={() => view(paste._id)}
                    >
                      {" "}
                      <img
                        src="src/assets/view-removebg-preview.png"
                        alt="view"
                        className="h-[30px]"
                      />
                    </button>

                    <button
                      className="cursor-pointer border border-gray-300  h-[30px] w-[30px] flex items-center justify-center hover:scale-110"
                      onClick={() => edit(paste._id)}
                    >
                      <img
                        src="src/assets/edit.png"
                        alt="edit"
                        className="h-[20px]"
                      />
                    </button>

                    <button
                      className="border border-gray-300 h-[30px] w-[30px] flex items-center justify-center cursor-pointer hover:scale-110"
                      onClick={() => handleCopy(paste.content)}
                    >
                      {" "}
                      <img
                        src="src/assets/copy-two-paper-sheets-interface-symbol.png"
                        alt="copy"
                        className="h-[20px]"
                      />
                    </button>

                    <button
                      className="border border-gray-300 h-[30px] w-[30px] flex items-center justify-center cursor-pointer hover:scale-110"
                      onClick={() => handledelete(paste._id)}
                    >
                      <img
                        src="src/assets/delete.png"
                        alt="copy"
                        className="h-[20px]"
                      />
                    </button>
                  </div>
                   
                   {/* date */}

                  <div className="flex gap-1 items-center"> <img src="src/assets/calendar.png" alt="calendar icon" className="h-[20px]"/> <span className="text-sm ">{formatedDate(paste.createdAt)}</span></div>
                  </div>
                </div>
              ))
            ): (
              <div className="flex items-center justify-center "><img src="src/assets/no-data.png" alt="No data" className="h-[100px] "/></div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Paste;
