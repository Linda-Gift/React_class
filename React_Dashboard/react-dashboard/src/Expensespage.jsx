import { useNavigate } from "react-router-dom"

export default function ExpensesPage(){
    const navigate = useNavigate()
    return(
        <div className="button-container">
            <button onClick={()=>navigate('fiatexp')}>
                Fiat Expenses
            </button>
            <button onClick={()=>navigate('cryptoexp')}>
                Crypto Expenses
            </button>
            <button onClick={()=>navigate('totalexp')}>
                Total Expenses
            </button>
        </div>
    )
}