import React from 'react'
import {useEffect, useState} from "react";
import ToDo from './ToDo';
import { getAllTasks } from "../services/toDoServices"

function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    const [ toggleFetch, setToggleFetch ] = useState(false)

    useEffect(() => {
        getAllTasks().then((gotTheTasks) => setTasks(gotTheTasks));

    },[toggleFetch]);


    return (
        <div>
            <h4>To do list</h4>
            <div>
                {tasks.map((toDoTask)=>(
                    <ToDo setToggleFetch={setToggleFetch} key={toDoTask._id} task={toDoTask}/>
                ))}
            </div>    
        </div>
    )
}

export default ToDoPage
