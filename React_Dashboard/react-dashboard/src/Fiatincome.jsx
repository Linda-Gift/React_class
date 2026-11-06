import FilterComponent from "./filtercomponent.jsx";
import IncomeComponent from "./Incomecomponent.jsx";
import TotalFiatIncome from "./totalfiatincomecomponent.jsx";
import DownloadIcon from './assets/Icons/arrow.svg'
import download from './assets/Icons/download.svg'
import TextPrompt from "./testpromptcomponent.jsx";
import { useLoaderData } from "react-router-dom";

export default function FiatIncome(){
    const amountData = useLoaderData()
    return(
        <div>
            <h1>Fiat Income</h1>
            <div className="filterbutton">
                <FilterComponent
                    filterNumber = {4} 
                    icon = {DownloadIcon}/>
            </div>
            
            <TotalFiatIncome
            totalAmount = "Total Fiat income"
            amountFig = {147000} 
            currency1 = "USD"
            currency2 = "EUR"
            currency3 = "NGN"/>

            <div className="incomecomponentgroup">
                <div className="amountlist">
                    {amountData.map((data, index)=>(
                        <div key={index}>
                            <IncomeComponent 
                            amount = {data.amount} date = {data.date}/>                  
                        </div>
                    ))}
                </div>
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

export const fiatLoader = async()=>{
   const response = await fetch("http://localhost:3000/income")
   return response.json()
}