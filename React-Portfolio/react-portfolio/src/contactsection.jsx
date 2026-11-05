import React, { useState } from 'react'


export default function ContactComponent(){

    const [text, setText] = useState({fullname:"", email:"", message: ""})  

    const handleChange = (event) => {  
        setText(event.target.value) 
    }

    return(
        <div className="contact-container">
            <div className="contact-heading">
                <div className="contact-title">
                    <h1>Send a Message!</h1>
                </div>
                <div className="contact-text">
                    <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
                </div>
            </div>

            <div className="contact-form">
            <form>
                <div className="forminput">

                    <div className="firstline">
                        <div className="inputgroup">
                            <label htmlFor="fullname">Full Name</label> 
                            <input type="text" id="fullname" 
                            name="fullname"                     placeholder="Your Name"
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
  
                    </div>
                    <div className="inputgroup1">
                        <label htmlFor="message">Enter Your Email</label> 
                        <textarea type="text" id="message" 
                        name="message"
                        placeholder="Your Message"
                        value={text.message || ""} 
                        onChange={(evt)=> setText({...text, message: evt.target.value})}/>
                    </div>
                    
                </div>
                
                <div className="button-container">
                    <button>Send</button>
                </div>
            </form>
            </div>
        </div>
    )
}