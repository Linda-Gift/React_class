import { useEffect, useState } from "react"

export default function TodoForm(){
    const [todo, setTodo] = useState("")
    const [enteredTodos, setenteredTodos] = useState([])
    const [initialLoad, setInitialLoad] = useState(true)

    useEffect(function () {
        const storedTodos = localStorage.getItem("reactTodos")
        if(storedTodos){
            setenteredTodos(JSON.parse(storedTodos))
        }
        setInitialLoad(false)
      }, [])

    useEffect(()=>{
        if(!initialLoad)
            localStorage.setItem("reactTodos", JSON.stringify(enteredTodos,))
    }, [enteredTodos])

    const submissionManager = (e)=>{
        e.preventDefault()

        setenteredTodos([...enteredTodos, todo])
        setTodo("")
    }

    console.log(enteredTodos)

    return(
        <div className="form-container">
           <form className="form" onSubmit={submissionManager}>
                <div className="input-group">
                    <label htmlFor="todoitem">Enter a ToDo</label>
                    <input type="text"
                    name="todo"
                    id="todoitem"
                    className="input"
                    value={todo || ''}
                    onChange={(e)=>setTodo(e.target.value)} />
                </div>
                <div className="button-container">
                    <button type="submit">Add ToDo</button>
                </div>
            </form> 

            {enteredTodos.map((todoitem, index)=>(
                <h1 key={index}>{todoitem}</h1>
            ))}
        </div>
    )
}