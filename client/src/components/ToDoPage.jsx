import React from 'react'
import {useEffect, useState} from "react";
import ToDo from './ToDo';
import { getAllTasks } from "../services/toDoServices"
import CreateToDo from '../screens/CreateToDo';
import { RiCloseCircleLine } from 'react-icons/ri';

function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    const [ toggleFetch, setToggleFetch ] = useState(false)

    useEffect(() => {
        getAllTasks().then((gotTheTasks) => setTasks(gotTheTasks));

    },[toggleFetch]);


    return (
        <div>
            <div className="todo">
            <CreateToDo/>
            <h4>To do list</h4>
            <div >
                {tasks.map((toDoTask)=>(
                    <ToDo  setToggleFetch={setToggleFetch} key={toDoTask._id} task={toDoTask}/>
                ))}
            </div>
            </div>    
        </div>
    )
}

export default ToDoPage
