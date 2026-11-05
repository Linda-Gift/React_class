export default function TotalFiatIncome({totalAmount,amountFig, currency1, currency2, currency3}){
    return(
        <div className="totalincome-container">

            <div className="totalincome-text">
                <h1>{totalAmount}</h1>
            </div>

            <div className="incomeamount-container">
                <div className="amountfig">
                    <h1>{amountFig}</h1>
                </div>

                <div className="currencyoption">
                    <select name="options" id="currency">
                        <option value="usd">{currency1}</option>
                        <option value="eur">{currency2}</option>
                        <option value="ngn">{currency3}</option>
                    </select>
                </div>
                
            </div>

        </div>
    )
}