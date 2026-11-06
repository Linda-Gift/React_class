import { Outlet } from "react-router-dom";
import IncomePage from "./Incomepage.jsx";

export default function IncomeLayout(){
    return(
        <div>
            <IncomePage />
            <Outlet />
        </div>
    )
}