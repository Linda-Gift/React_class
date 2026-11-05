import FilterComponent from "./filtercomponent.jsx";
import IncomeComponent from "./Incomecomponent.jsx";
import TotalFiatIncome from "./totalfiatincomecomponent.jsx";
import DownloadIcon from './assets/Icons/arrow.svg'
import download from './assets/Icons/download.svg'
import TextPrompt from "./testpromptcomponent.jsx";

export default function CryptoIncome(){

    return(
        <div>
            <h1>Crypto Income</h1>

            <div className="filterbutton">
                <FilterComponent
                    filterNumber = {6} 
                    icon = {DownloadIcon}/>
            </div>

            <TotalFiatIncome 
                totalAmount = "Total Crypto income"
                amountFig = {646000}
                currency1 = "BTC"
                currency2 = "ETH"
                currency3 = "NTC"/>

            <div className="incomecomponentgroup">
                <IncomeComponent 
                    amount = {200000}coin="BTC"
                    date = "19 March, 2024"/>
                <IncomeComponent 
                    amount = {28000}coin="BTC"
                    date = "08 March, 2024"/>
                <IncomeComponent 
                    amount = {58000}coin="BTC"
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