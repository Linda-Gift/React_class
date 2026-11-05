import ImageIcon from './assets/lady.png'

import CasestudyCards from "./casestudycards.jsx";

export default function CaseStudySection(){
    return(

        <div className="casestudysection">
            <div className="casestudyheading">
                <div className="headtext">
                    <h1>Case Studies</h1>
                </div>

                <div className="casetext">
                    <p>Selected work I have taken on in the past</p>
                </div>
            </div>

            <div className="casestudycards-container">
            
                <CasestudyCards 
                    Title = "Meal Planning Application"
                    textdescription="Mobile App"
                    // image={ImageIcon}
                />

                <CasestudyCards 
                    Title = "Meal Planning Application"
                    textdescription="Mobile App"
                    // image={ImageIcon}
                />

                <CasestudyCards 
                    Title = "Meal Planning Application"
                    textdescription="Mobile App"
                    // image={ImageIcon}
                />

                <CasestudyCards 
                    Title = "Meal Planning Application"
                    textdescription="Mobile App"
                    // image={ImageIcon}
                />

                <CasestudyCards 
                    Title = "Meal Planning Application"
                    textdescription="Mobile App"
                    // image={ImageIcon}
                />
            </div>
        </div>
       
    )
}