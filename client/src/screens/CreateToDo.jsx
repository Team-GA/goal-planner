import { useState } from "react";
import { useHistory } from "react-router";
import { createTask } from "../services/toDoServices";

function CreateToDo() {
    const [task, setTask] = useState("");
    const history = useHistory();
    const handelSubmit = async (e) => {
        try {
            e.preventDefault();
            const taskEntry = {
                task,
            }
            await createTask(taskEntry);
            history.push("/all-to-do")
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <section>
            <h4>adding a task</h4>
            <form onSubmit ={handelSubmit}>
                <label htmlFor="task">task:</label>
                <input id="task" className="to-do-input" type="text" value={task} onChange={(e)=>setTask(e.target.value)}></input>
                <button type="submit">Submit Task</button>
            </form>
        </section>
    )
}
export default CreateToDo;