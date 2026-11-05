export default function AddDownloadComponent({textTitle, textDescription, buttonText}){
    return(
        <div className="download-container">

            <div className="heading-and-text">
                <div className="headingtext">
                    <h1>{textTitle}</h1>
                </div>

                <div className="textdescription">
                    <p>{textDescription}</p>
                </div>
            </div>

            <div className="downloadbutton">
                <button>{buttonText}</button>
            </div>
            
        </div>
    )
}