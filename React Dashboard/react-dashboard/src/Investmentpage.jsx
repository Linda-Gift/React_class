import { useNavigate } from "react-router-dom"

export default function InvestmentPage(){
    const navigate = useNavigate()
    return(
        <div className="button-container">
            <button onClick={()=>navigate('fiatinv')}>
                Fiat Investment
            </button>
            <button onClick={()=>navigate('cryptoinv')}>
                Crypto Investment
            </button>
            <button onClick={()=>navigate('totalinv')}>
                Total Investment
            </button>
        </div>
    )
}