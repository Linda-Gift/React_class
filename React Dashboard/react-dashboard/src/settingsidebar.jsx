import {NavLink} from 'react-router-dom'
import GeneralIcon from './assets/Icons/general.svg'
import ProfileIcon from './assets/Icons/profile.svg'
import NotificationIcon from './assets/Icons/notification.svg'
import PreferenceIcon from './assets/Icons/preference.svg'
import LanguageIcon from './assets/Icons/langauge.svg'
import SecurityIcon from './assets/Icons/security.svg'

export default function SettingsSidebar(){
    return(
      <div className='sidebar2-container'>

        <div className="menuitems2-container">

            <NavLink to={"GeneralPage"} className="menu-content2">
                <div className="menuicon-container">
                    <img src={GeneralIcon} alt="income icon" />
                </div>

                <div className="header2">
                    <h1>General</h1>
                </div>
  
            </NavLink>

            <NavLink to={"Profilepage"} className="menu-content2">
                <div className="menuicon-container">
                    <img src={ProfileIcon} alt="income icon" />
                </div>

                <div className="header2">
                    <h1>Profile</h1>
                </div>
  
            </NavLink>

            <NavLink to={"NotificationPage"} className="menu-content2">
                <div className="menuicon-container">
                    <img src={NotificationIcon} alt="income icon" />
                </div>

                <div className="header2">
                    <h1>Notifications</h1>
                </div>
  
            </NavLink>

            <NavLink to={"PreferencePage"} className="menu-content2">
                <div className="menuicon-container">
                    <img src={PreferenceIcon} alt="income icon" />
                </div>

                <div className="header2">
                    <h1>Preference</h1>
                </div>
  
            </NavLink>

            {/* <NavLink to={"LanguagePage"} className="menu-content2">
                <div className="menuicon-container">
                    <img src={LanguageIcon} alt="income icon" />
                </div>

                <div className="header2">
                    <h1>Language</h1>
                </div>
  
            </NavLink> */}

            <NavLink to={"SecurityPage"} className="menu-content2">
                <div className="menuicon-container">
                    <img src={SecurityIcon} alt="income icon" />
                </div>

                <div className="header2">
                    <h1>Security</h1>
                </div>
  
            </NavLink>     
           
            
        </div>

      </div>  
    )
}