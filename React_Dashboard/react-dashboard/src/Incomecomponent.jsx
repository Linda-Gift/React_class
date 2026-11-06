import { Link } from "react-router-dom";

export default function IncomeComponent({amount,coin, date}){
    return(
        <div className="totalincome-container1">
            <div className="incomegroup">
                <div className="income-text">
                    <h1>{amount}{coin}</h1>
                </div>

                <div className="date">
                    <p>{date}</p>
                </div>

            </div>
            
            <div className="details">
                <Link>
                    <p>See Details</p>
                </Link>  
            </div>

        </div>
    )
}