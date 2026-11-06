import FilterComponent from "./filtercomponent.jsx";
import IncomeComponent from "./Incomecomponent.jsx";
import TotalFiatIncome from "./totalfiatincomecomponent.jsx";
import DownloadIcon from './assets/Icons/arrow.svg'
import download from './assets/Icons/download.svg'
import TextPrompt from "./testpromptcomponent.jsx";

export default function FiatInvestment(){

    return(
        <div>
            <h1>Fiat Investment</h1>

           <div className="filterbutton">
                <FilterComponent
                    filterNumber = {8} 
                    icon = {DownloadIcon}/>
            </div>

            <TotalFiatIncome 
            totalAmount = "Total Fiat investment"
            amountFig = {2000000}
            currency1 = "USD"
            currency2 = "EUR"
            currency3 = "NGN"/>

            <div className="incomecomponentgroup">
                <IncomeComponent 
                    amount = {100000}
                    date = "19 March, 2024"/>
                <IncomeComponent 
                    amount = {20000}
                    date = "08 March, 2024"/>
                <IncomeComponent 
                    amount = {27000}
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