import CaseStudySection from "./Casestudycardcomponent";
import FooterSection from "./footersection";
import Cv from "./assets/cv.png";

export default function ResumeSection(){
    return(
        <div className="resume-container">
           <div className="resume">
                <img src={Cv} alt="resumeimage" />
           </div>
        </div>
    )
}