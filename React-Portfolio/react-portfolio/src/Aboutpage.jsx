import AboutSection from "./aboutherosection";
import FooterSection from "./footersection";
import NavBarComponent from "./header";
import OverTheYearComponent from "./overtheyearsection";

export default function AboutPage(){
    return(
        <div className="about-container">
            <NavBarComponent />

            <AboutSection />

            <OverTheYearComponent />

            {/* <FooterSection /> */}
        </div>
    )
}