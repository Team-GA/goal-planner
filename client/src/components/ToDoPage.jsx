import React from 'react'
import {useEffect, useState} from "react";
import ToDo from './ToDo';
import { getAllTasks } from "../services/toDoServices"
function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        getAllTasks().then(((gotTheTasks) => setTasks(gotTheTasks)))
    },[]);
    return (
        <div>
            <h4>To do list</h4>
            <div>
                {tasks.map((task)=>(
                    <ToDo key={task._id} task={task}/>
                ))}
            </div>    
        </div>
    )
}

export default ToDoPage
