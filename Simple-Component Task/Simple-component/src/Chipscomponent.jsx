import CancelIcon from './assets/cancel.svg'


export default function Chipscomponent({ titleText, onCancel }){
    return(
        <div className='chips'>
            
            <div className="header">
                <p>{titleText}</p>
            </div>
                
            <div className="chipsicon">
                <button onClick={onCancel} className="cancel-button">
                <img src={CancelIcon} alt="" />
                </button>
                
            </div>            
            
        </div>
    )
}