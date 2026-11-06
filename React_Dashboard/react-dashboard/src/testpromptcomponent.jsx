import SendIcon from './assets/Icons/send.svg'

export default function TextPrompt({icon}){
    return(
        <div className="textprompt-container">
            <div className="input-container">
                <input type="text" name="text" id="text" placeholder="Talk to our AI finance expert"/>
            </div>

            <div className="prompticon">
                <img src={SendIcon} alt="" />
            </div>
            
        </div>
    )
}