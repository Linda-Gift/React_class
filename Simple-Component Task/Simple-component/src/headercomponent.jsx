import InfoIcon from './assets/info.svg'

export default function HeaderComponent(){
    return(
        <div className="header-container">
            <div className="head">
                <div className="headingtext">
                    <h1>Add Tags</h1>
                </div>

                <div className="text">
                    <p>(max.8)</p>
                </div>
            </div>
           
            <div className="icon">
                <img src={InfoIcon} alt="" />
            </div>


        </div>
    )
}