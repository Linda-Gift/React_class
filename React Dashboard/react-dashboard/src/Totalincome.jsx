import FilterComponent from "./filtercomponent.jsx";
import IncomeComponent from "./Incomecomponent.jsx";
import TotalFiatIncome from "./totalfiatincomecomponent.jsx";
import DownloadIcon from './assets/Icons/arrow.svg'
import download from './assets/Icons/download.svg'
import TextPrompt from "./testpromptcomponent.jsx";

export default function TotalIncome(){

    return(
        <div>
            <h1>Total Income</h1>

            <div className="filterbutton">
                <FilterComponent
                    filterNumber = {9} 
                    icon = {DownloadIcon}/>
            </div>

            <TotalFiatIncome 
                totalAmount = "Total income"
                amountFig = {147000}
                currency1 = "USD"
                currency2 = "EUR"
                currency3 = "NGN"/>

            <div className="incomecomponentgroup">
                <IncomeComponent 
                    amount = {1000000}
                    date = "19 March, 2024"/>
                <IncomeComponent 
                    amount = {14000}
                    date = "08 March, 2024"/>
                <IncomeComponent 
                    amount = {70000}
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