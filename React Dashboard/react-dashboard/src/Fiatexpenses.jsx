import FilterComponent from "./filtercomponent.jsx";
import IncomeComponent from "./Incomecomponent.jsx";
import TotalFiatIncome from "./totalfiatincomecomponent.jsx";
import DownloadIcon from './assets/Icons/arrow.svg'
import download from './assets/Icons/download.svg'
import TextPrompt from "./testpromptcomponent.jsx";

export default function FiatExpenses(){

    return(
        <div>
            <h1>Fiat Expenses</h1>

           <div className="filterbutton">
                <FilterComponent
                    filterNumber = {10} 
                    icon = {DownloadIcon}/>
            </div>

            <TotalFiatIncome 
            totalAmount = "Total Fiat expenses"
            amountFig = {545000}
            currency1 = "USD"
            currency2 = "EUR"
            currency3 = "NGN"/>

            <div className="incomecomponentgroup">
                <IncomeComponent 
                    amount = {80000}
                    date = "19 March, 2024"/>
                <IncomeComponent 
                    amount = {400000}
                    date = "08 March, 2024"/>
                <IncomeComponent 
                    amount = {30000}
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