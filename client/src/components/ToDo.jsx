
import { deleteTask, getTaskbyId } from "../services/toDoServices";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import "../screens/ToDo.css"

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
        <article className='icons' className="todo-row">
            <h4>{toDo.task}</h4>

            <RiCloseCircleLine className='delete-icon' onClick={handelDelete}/>
            <Link to={`/edit-to-do/${ID}`}>
                <TiEdit className='edit-icon'/>
            </Link>
        </article>
        
    )
}
export default ToDo;