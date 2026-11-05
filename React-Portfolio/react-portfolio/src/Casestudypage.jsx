import CaseStudySection from "./Casestudycardcomponent";
import FooterSection from "./footersection";
import NavBarComponent from "./header";

export default function CaseStudyPage(){
    return(
        <div className="casestudy-container">
            <NavBarComponent />

            <CaseStudySection />

            <FooterSection />
        </div>
    )
}