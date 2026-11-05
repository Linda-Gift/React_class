import AddIcon from './assets/add.svg'

export default function AddTextPrompt(){
    return(
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
                        + Add Tag
                </button>
            </div>
            
        </div>
    )
}