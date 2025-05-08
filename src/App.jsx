
import { createBrowserRouter } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import Home from './components/Home'; // Adjust the path as needed

import { RouterProvider } from 'react-router-dom'
import EditPaste from './components/EditPaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
         <Navbar/>
         <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
         <Navbar/>
         <Paste/>
      </div>
    },
    {
      path:'/pastes/:id',
      element:
      <div>
            <Navbar/>
            <ViewPaste/>
      </div>
    },
    {
      path:"/editpaste/:id",
      element:
      <div>
         <Navbar/>
         <EditPaste/>
      </div>
    },
  ]
)

function App() {


  return (
    <div className="font-poppins">
     
     <RouterProvider router={router}/>
     
  </div>
  )
}

export default App
