import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Bookings from './pages/bookings/Bookings';
import List from './pages/list/List'
import Add from './pages/add/Add'
import './App.css'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url="http://localhost:4000";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add urlprop={url}/>}/>
          <Route path='/list' element={<List urlprop={url}/>}/>
          <Route path='/bookings' element={<Bookings urlprop={url}/>}/>
        </Routes>


      
      </div>
    </div>
  )
}

export default App
