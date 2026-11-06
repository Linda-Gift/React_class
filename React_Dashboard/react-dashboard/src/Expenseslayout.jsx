import { Outlet } from "react-router-dom";
import ExpensesPage from "./Expensespage.jsx";

export default function ExpensesLayout(){
    return(
        <div>
            <ExpensesPage />
            <Outlet />
        </div>
    )
}