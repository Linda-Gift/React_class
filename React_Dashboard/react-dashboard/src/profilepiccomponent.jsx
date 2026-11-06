import Button from "./buttoncomponent.jsx"
import ProfileImage from './assets/Icons/lady.jpeg'


export default function ProfilePic(){
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
}