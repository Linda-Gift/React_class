import { Outlet } from "react-router-dom";
import SettingsSidebar from "./settingsidebar.jsx";

export default function SettingsLayout(){

    return(
        <div className="mainpage1">
        
            <div className="sidebar1">
                <SettingsSidebar />
            </div>
  
            <div className="detailcontent1">
               <Outlet />
            </div>
  
        </div>
    )
}