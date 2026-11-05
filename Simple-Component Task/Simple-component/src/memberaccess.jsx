import CheckboxComponent from "./checkboxcomponent";

    export default function MembershipComponent({newText}){
        return(
            <div className="memberaccess">
                <div className="heading">
                    <h1>Members with access</h1>
                </div>

                <CheckboxComponent 
                displayText="Display on profile"
                newText="New"/>

                <CheckboxComponent 
                displayText="Disable commenting"/>
            </div>
        )
    }