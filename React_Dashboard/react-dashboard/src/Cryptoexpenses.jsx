import FilterComponent from "./filtercomponent.jsx";
import IncomeComponent from "./Incomecomponent.jsx";
import TotalFiatIncome from "./totalfiatincomecomponent.jsx";
import DownloadIcon from './assets/Icons/arrow.svg'
import download from './assets/Icons/download.svg'
import TextPrompt from "./testpromptcomponent.jsx";

export default function CryptoExpenses(){

    return(
        <div>
            <h1>Crypto Expenses</h1>

            <div className="filterbutton">
                <FilterComponent
                    filterNumber = {3} 
                    icon = {DownloadIcon}/>
            </div>

            <TotalFiatIncome 
            totalAmount = "Total Crypto expenses"
            amountFig = {367000}
            currency1 = "BTC"
            currency2 = "ETH"
            currency3 = "NTC"/>

            <div className="incomecomponentgroup">
                <IncomeComponent 
                    amount = {900000}coin="BTC"
                    date = "19 March, 2024"/>
                <IncomeComponent 
                    amount = {20000}coin="BTC"
                    date = "08 March, 2024"/>
                <IncomeComponent 
                    amount = {7000}coin="BTC"
                    date = "08 March, 2024"/>
            </div>

            <div className="filterbutton">
                <FilterComponent
                    filterNumber = {4} 
                    icon = {DownloadIcon}/>
            </div>

            <TextPrompt />
            
        </div>
    )
}