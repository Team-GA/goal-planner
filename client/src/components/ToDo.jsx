import {Link} from "react-router-dom"
import { deleteTask, getTaskbyId } from "../services/toDoServices";
import { useEffect, useState } from "react";

const ToDo = (props) => {
    const [toDo, setToDo] = useState({});
    const ID = props.task._id;

    useEffect(() => {
        getTaskbyId(ID).then((gotToDo) => setToDo(gotToDo))
    }, [ID]);

    const handelDelete = async () => {
        await deleteTask(ID)
        props.setToggleFetch((curr) => !curr); 
    }

    return(
        <article>
            <h4>{toDo.task}</h4>
            <Link to="/add-to-do">
                <button>create a to do</button>
                
            </Link>
            <button onClick={handelDelete}>X</button>
        </article>
    )
}
export default ToDo;