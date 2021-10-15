import {Link} from "react-router-dom"
import { deleteTask } from "../services/toDoServices";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const ToDo = (props) => {
    const [toggleFetch, setToggleFetch] = useState(false);
    const  task  = props.task;
    const ID = props.task._id;
    const history = useHistory();
    // console.log(task)
    const handelDelete = async () => {
        await deleteTask(ID)
        setToggleFetch((curr) => !curr); 
        history.push("/all-to-do")
    }
    return(
        <article>
            <h4>{task.task}</h4>
            <Link to="/add-to-do">
                <button>create a to do</button>
                
            </Link>
            <button onClick={handelDelete}>X</button>
        </article>
    )
}
export default ToDo;