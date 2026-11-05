import ImageIcon from './assets/lady.png'

import CasestudyCards from "./casestudycards.jsx";

export default function CodingWorksSection(){
    return(

        <div className="casestudysection">
            <div className="casestudyheading">
                <div className="headtext">
                    <h1>./Works</h1>
                </div>

                <div className="casetext">
                    <p>Selected work I have taken on in the past</p>
                </div>
            </div>

            <div className="casestudycards-container">
            
                <CasestudyCards 
                    Title = "CSS Color Generator"
                    textdescription="Desktop App"
                    image="./assets/csscolorcode.jpeg"
                />

                <CasestudyCards 
                    Title = "YouTube Dashboard"
                    textdescription="Desktop App"
                    image="./assets/dashbord.jpeg"
                />

                <CasestudyCards 
                    Title = "Resources Creation Application"
                    textdescription="Destop App"
                    image='./assets/resource.jpeg'
                />

                <CasestudyCards 
                    Title = "TaskTrek Project Management"
                    textdescription="Desktop App"
                    image="./assets/tasktrek.jpeg"
                />

                <CasestudyCards 
                    Title = "ToDo List Application"
                    textdescription="Desktop App"
                    image="./assets/todo.jpeg"
                />
            </div>
        </div>
       
    )
}