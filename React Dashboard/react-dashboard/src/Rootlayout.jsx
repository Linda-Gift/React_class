import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar.jsx'
import styles from "./sidebar.module.css"


export default function RootLayout(){
    return(
        <div className="mainpage">
        
            <div className="sidebar">
                <Sidebar />
            </div>
  
            <div className="detailcontent">
               <Outlet />
            </div>
  
        </div>
    )
}