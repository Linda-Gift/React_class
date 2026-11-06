import {NavLink} from 'react-router-dom'
import incomeIcon from './assets/Icons/income.svg'
import expensesIcon from './assets/Icons/expenses.svg'
import investmentIcon from './assets/Icons/investment.svg'
import smsIcon from './assets/Icons/sms.svg'
import settingsIcon from './assets/Icons/settings.svg'
import IncomePage from './Incomepage.jsx'
import ExpensesPage from './Expensespage.jsx'
import SmsPage from './Sms.jsx'
import InvestmentPage from './Investmentpage.jsx'
import SettingsPage from './Settingspage.jsx'
import styles from "./sidebar.module.css"

export default function Sidebar(){
    return(
      <div className='sidebar-container'>

        <div className="menuitems-container">

            <NavLink to={"/"} className="menu-content">
                <div className="menuicon-container">
                    <img src={incomeIcon} alt="income icon" />
                </div>

                <div className="menuheadertexts-container">
                    <div className="header">
                        <h1>Income</h1>
                    </div>

                    <div className="subtext">
                        <p>Click to see how much income you've made</p>
                    </div>
                </div> 
            </NavLink>

            <NavLink to={"ExpensesPage"}className="menu-content" >
                <div className="menuicon-container">
                    <img src={expensesIcon} alt="expenses icon" />
                </div>

                <div className="menuheadertexts-container">
                    <div className="header">
                        <h1>Expenses</h1>
                    </div>

                    <div className="subtext">
                        <p>Click to see how much you've spent</p>
                    </div>
                </div> 
            </NavLink>

            <NavLink to={"SmsPage"}className="menu-content">
                <div className="menuicon-container">
                    <img src={smsIcon} alt="expenses icon" />
                </div>

                <div className="menuheadertexts-container">
                    <div className="header">
                        <h1>SMS alerts</h1>
                    </div>

                    <div className="subtext">
                        <p>Click to see your financial SMS notifications </p>
                    </div>
                </div> 
            </NavLink>

            <NavLink to={"InvestmentPage"}className="menu-content">
                <div className="menuicon-container">
                    <img src={investmentIcon} alt="expenses icon" />
                </div>

                <div className="menuheadertexts-container">
                    <div className="header">
                        <h1>Investments</h1>
                    </div>

                    <div className="subtext">
                        <p>Click to see how much you have invested </p>
                    </div>
                </div> 
            </NavLink>
           
            <NavLink to={"SettingsPage"}className="menu-content">
                <div className="menuicon-container">
                    <img src={settingsIcon} alt="expenses icon" />
                </div>

                <div className="menuheadertexts-container">
                    <div className="header">
                        <h1>Settings</h1>
                    </div>

                    <div className="subtext">
                        <p>Click to change your settings</p>
                    </div>
                </div> 
            </NavLink>
        </div>

      </div>  
    )
}