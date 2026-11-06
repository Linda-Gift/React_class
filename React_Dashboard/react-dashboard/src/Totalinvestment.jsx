import FilterComponent from "./filtercomponent.jsx"
import IncomeComponent from "./Incomecomponent.jsx"
import TotalFiatIncome from "./totalfiatincomecomponent.jsx";
import DownloadIcon from './assets/Icons/arrow.svg'
import download from './assets/Icons/download.svg'
import TextPrompt from "./testpromptcomponent.jsx"

export default function TotalInvestment(){
    // const totalFigure = incomeData.reduce((total, income) => total + income.amount, 0);
    return(
        <div>
            <h1>Total Investment</h1>

            <div className="filterbutton">
                <FilterComponent
                    filterNumber = {7} 
                    icon = {DownloadIcon}/>
            </div>

            <TotalFiatIncome 
            totalAmount = "Total Investment"
            amountFig = {2707000}
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