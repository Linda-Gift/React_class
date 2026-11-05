import Button from "./buttoncomponent.jsx"
import React, { useState } from 'react'

export default function FormComponent(){

    const [text, setText] = useState({fullname:"", email:"", phonenumber: ""})  

    const handleChange = (event) => {  
        setText(event.target.value) 
        
    const [selectedOption, setSelectedOption] = useState('')
    const handleChange = (event) => {  
        setSelectedOption(event.target.value)
  }}
    return(
        <div className="form-container">
            <form>
                <div className="forminput">
                
                    <div className="inputgroup">
                        <label htmlFor="fullname">Enter Full Name</label> 
                        <input type="text" id="fullname" 
                        name="fullname"
                        placeholder="Enter your Full name"
                        value={text.fullname || ""} 
                        onChange={(evt)=> setText({...text, fullname: evt.target.value})}/>
                    </div>

                    <div className="inputgroup">
                        <label htmlFor="email">Enter Your Email</label> 
                        <input type="email" id="email" 
                        name="email"
                        placeholder="Enter your Email"
                        value={text.email || ""} 
                        onChange={(evt)=> setText({...text, email: evt.target.value})}/>
                    </div>

                    <div className="inputgroup">
                        <label htmlFor="number">Mobile Number</label> 
                        <input type="number" id="number" 
                        name="number"
                        placeholder="Enter your phone number"
                        value={text.phonenumber || ""} 
                        onChange={(evt)=> setText({...text, phonenumber: evt.target.value})}/>
                    </div>

                    <div className="inputgroup">
                        <label htmlFor="number">ID</label> 
                        <input type="number" id="number" 
                        name="number"
                        placeholder="Enter your Identity Number"
                        value={text.id || ""} 
                        onChange={(evt)=> setText({...text, id: evt.target.value})}/>
                    </div>

                    <div className="inputgroup">
                        <label htmlFor="number">Nationality</label> 
                        <select name="country" id="country">
                            <option value="ngn">Nigeria</option>
                            <option value="usa">USA</option>
                            <option value="eur">United Kingdom</option>
                            <option value="sa">South Africa</option>
                            <option value="kenya">Nigerian</option>
                            <option value="sweden">Sweden</option>
                            <option value="scotland">Scotland</option>
                        </select>
                    </div>
  
                </div>
                
                <div className="button-container">
                    <Button 
                    buttonName = "Save Changes"/>

                    <Button 
                    buttonName = "Cancel"/>
                </div>
            </form>
        </div>
    )
}