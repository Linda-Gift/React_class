import { Outlet } from "react-router-dom";
import InvestmentPage from "./Investmentpage.jsx";

export default function IncomeLayout(){

    return(
        <div>
            <InvestmentPage />
            <Outlet />
        </div>
    )
}