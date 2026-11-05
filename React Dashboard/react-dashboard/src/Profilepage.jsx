import FormComponent from "./formcomponent.jsx";
import ProfilePic from "./profilepiccomponent.jsx";
import ProfileImage from './assets/Icons/lady.jpeg'
import Button from "./buttoncomponent.jsx"

export default function ProfilePage(){
    return(
        <div className="profilepage-container">
            <div className="heading">
                <h1>Profile Page</h1> 
            </div>

            <div className="profile-and-buttons">

                <div className="profilepic">
                    <img src={ProfileImage} alt="profileimage" />
                </div>
                <div className="profilebutton">
                    <Button 
                    buttonName = "Upload Here"/>

                    <Button 
                    buttonName = "Delete"/>
                </div>
            
            </div>
            
            <div className="profile-content">
                <ProfilePic />

                <FormComponent />
            </div>
        </div>
    )
}