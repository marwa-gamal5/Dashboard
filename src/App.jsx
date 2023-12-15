import { useState } from 'react'
import './App.css'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/navbar/Navbar';
import  Sidebar from './Components/sidebar/Sidebar.jsx';
import Table from './Components/table/table.jsx'
function App() {
  const [sidebarOpen,setsidebarOpen]= useState(false);
  const openSidebar=() =>{
    setsidebarOpen(true);
  }
  const closeSidebar=()=>{
    setsidebarOpen(false);
  }

  return (
      <>
        <div className="content">
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
          <Table/>
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>


        </div>
      </>
  )
}

export default App
