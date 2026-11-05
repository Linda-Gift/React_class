import React, { useState } from "react"

export default function CheckboxComponent({displayText, newText}) {
    const [isChecked, setIsChecked] = useState(false)

    // Toggle the checkbox state
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="checkbox-div">

            <div className="checkbox-container">
                <div className="label-and-input-content">
                    <label name="check1" id="check1" className="checkboxcontainer1">
                    <input className="checkbox"
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                    />
                    {displayText}
                    </label> 
                </div>
                

                <div className="newtext">
                    <h3>{newText}</h3>
                </div>
            </div>

            
        </div>
    )
}