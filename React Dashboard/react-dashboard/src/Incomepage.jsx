import { useNavigate } from "react-router-dom"

export default function IncomePage(){
    const navigate = useNavigate()
    return(
        <div className="button-container">
            <button onClick={()=>navigate('fiat')}>
                Fiat Income
            </button>
            <button onClick={()=>navigate('crypto')}>
                Crypto Income
            </button>
            <button onClick={()=>navigate('total')}>
                Total Income
            </button>
        </div>
    )
}