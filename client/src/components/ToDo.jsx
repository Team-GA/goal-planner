
import { deleteTask, getTaskbyId } from "../services/toDoServices";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

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

            <button onClick={handelDelete}>X</button>
            <Link to={`/edit-to-do/${ID}`}>
                <button>edit</button>
            </Link>
        </article>
        
    )
}
export default ToDo;