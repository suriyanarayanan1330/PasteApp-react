// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';


const initialState = {
 pastes:localStorage.getItem("pastes")
 ? JSON.parse(localStorage.getItem("pastes"))
  :[]
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
       const paste = action.payload
       state.pastes.push(paste);
       localStorage.setItem("pastes",JSON.stringify(state.pastes));
       toast("Paste Created Successfully!!");

    },
    updateToPastes: (state,action) => {
    
      const paste = action.payload
      const index = state.pastes.findIndex((item)=>item._id === paste._id);

      console.log(index)

      if(index>=0){

        const existingPaste = state.pastes[index]

        const isDifferent = JSON.stringify(existingPaste)!==JSON.stringify(paste)
         
        if(isDifferent){
          state.pastes[index] = paste;

          // localStorage.setItem("pastes",JSON.stringify(state.pastes))
  
          localStorage.setItem("pastes",JSON.stringify(state.pastes));
  
          console.log(localStorage.getItem('pastes'))
  
          toast.success("Paste Updated!!")
        }
        else{
           toast.info("No changes detected")
        }
       
      }
      
    },
    resetAllPastes: (state,action) => {
       state.pastes=[];

       localStorage.removeItem("pastes");
    },
    removeFromPastes:(state,action)=>{
    const pasteId = action.payload;

    console.log(pasteId);
    const index = state.pastes.findIndex((item)=>item._id === pasteId)
    
    if(index>=0){
      state.pastes.splice(index,1);

      localStorage.setItem("pastes",JSON.stringify(state.pastes));

      toast.success("Pastes deleted")
    }

    }
  },
});

export const { addToPastes, updateToPastes,resetAllPastes, removeFromPastes } = pasteSlice.actions;
export default pasteSlice.reducer;
