import CodingWorksSection from "./Codingworkscomponents";
import FooterSection from "./footersection";
import NavBarComponent from "./header";

export default function CodingPortfolioPage(){
    return(
        <div className="casestudy-container">
            <NavBarComponent />

            <CodingWorksSection />

            <FooterSection />
        </div>
    )
}