import React, { useState } from "react";
import AddDownloadComponent from "./Adddownload";
import AddTextPrompt from "./Addtextprompt";
import Chipscomponent from "./Chipscomponent";
import HeaderComponent from "./headercomponent";
import MembershipComponent from "./memberaccess";

export default function AllComponents(){

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("") // State to hold the input value

    // Function to add a tag dynamically
    const handleAddTag = () => {
        if (newTag.trim() && !tags.includes(newTag)) {
            setTags([...tags, newTag.trim()])
            setNewTag("") // Reset input field
        }
    }

    // Function to remove a tag
    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))
    }

    return(
        <div className="card-component">
            <div className="headercomponents">
                <HeaderComponent />

                {/* <AddTextPrompt /> */}

                <div className="textprompt-container">
                    <div className="input-container">
                        <input
                        type="text"
                        placeholder="Add a tag..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        />
                    </div>
                    

                    <div className="addprompticon">
                        <button onClick={handleAddTag} className="add-tag-button">
                        +
                        </button>
                    </div>
                    
                </div>


                {/* Display added tags as chips */}
                <div className="chipscontainer">
                    {tags.map((tag) => (
                        <Chipscomponent
                            key={tag}
                            titleText={tag}
                            onCancel={() => handleRemoveTag(tag)}
                        />
                    ))}
                </div>

            </div>

            <MembershipComponent />

            <AddDownloadComponent 
            textTitle="Add Download File"
            textDescription="Share your file and allow downloads"
            buttonText="Add"/>

            <AddDownloadComponent 
            textTitle="Add to Project Portfolio"
            textDescription="Share a project to be added to your work"
            buttonText="Choose"/>

        </div>
    )
}