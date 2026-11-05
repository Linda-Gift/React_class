import { useState } from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import RootLayout from './Rootlayout.jsx'
import IncomePage from './Incomepage.jsx'
import ExpensesPage from './Expensespage.jsx'
import InvestmentPage from './Investmentpage.jsx'
import SmsPage from './Sms.jsx'
import SettingsPage from './Settingspage.jsx'
import IncomeLayout from './Incomelayout.jsx'
import FiatIncome, { fiatLoader } from './Fiatincome.jsx'
import CryptoIncome from './Cryptoincome.jsx'
import TotalIncome from './Totalincome.jsx'
import ExpensesLayout from './Expenseslayout.jsx'
import FiatExpenses from './Fiatexpenses.jsx'
import CryptoExpenses from './Cryptoexpenses.jsx'
import TotalExpenses from './Totalexpenses.jsx'
import InvestmentLayout from './Investmentlayout.jsx'
import FiatInvestment from './Fiatinvestment.jsx'
import CryptoInvestment from './Cryptoinvestment.jsx'
import TotalInvestment from './Totalinvestment.jsx'
import SettingsLayout from './Settingslayout.jsx'
import GeneralPage from './Generalpage.jsx'
import PreferencePage from './Preferencepage.jsx'
import NotificationPage from './Notificationpage.jsx'
import SecurityPage from './Securitypage.jsx'
import ProfilePic from './profilepiccomponent.jsx'
import ProfilePage from './Profilepage.jsx'


function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route path='/' element={<IncomeLayout />}>
        <Route index element={<FiatIncome />} loader = {fiatLoader}/>

        <Route path='fiat' element={<FiatIncome />} loader = {fiatLoader}/>
        <Route path='crypto' element={<CryptoIncome />}/>
        <Route path='total' element={<TotalIncome />}/>

      </Route>

      
      <Route path='ExpensesPage' element={<ExpensesLayout />}>
    
        <Route index element={<FiatExpenses />}/>

        <Route path='fiatexp' element={<FiatExpenses />}/>
        <Route path='cryptoexp' element={<CryptoExpenses />}/>
        <Route path='totalexp' element={<TotalExpenses />}/>

      </Route>

      <Route path="/Smspage" element={<SmsPage />}/>

      <Route path='InvestmentPage' element={<InvestmentLayout />}>
    
        <Route index element={<FiatInvestment />}/>

        <Route path='fiatinv' element={<FiatInvestment />}/>
        <Route path='cryptoinv' element={<CryptoInvestment />}/>
        <Route path='totalinv' element={<TotalInvestment />}/>

      </Route>

      {/* <Route path="/Settingspage" element={<SettingsPage />}/> */}

      <Route path='SettingsPage' element={<SettingsLayout />}>
    
        <Route index element={<ProfilePage />}/>

        {/* <Route path='genpage' element={<GeneralPage />}/>
        <Route path='profpage' element={<ProfilePage />}/> */}
        <Route path='prefpage' element={<PreferencePage />}/>

      </Route>



    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App
