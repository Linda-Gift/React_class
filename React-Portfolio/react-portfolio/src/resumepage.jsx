import FooterSection from "./footersection";
import NavBarComponent from "./header";
import ResumeSection from "./resumesection";

export default function ResumePage(){
    return(
        <div className="casestudy-container">
            <NavBarComponent />

            <ResumeSection />

            <FooterSection />
        </div>
    )
}