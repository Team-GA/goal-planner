import React from 'react'
import {useEffect, useState} from "react";
import ToDo from './ToDo';
import { getAllTasks } from "../services/toDoServices"
import CreateToDo from '../screens/CreateToDo';

function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    const [ toggleFetch, setToggleFetch ] = useState(false)

    useEffect(() => {
        getAllTasks().then((gotTheTasks) => setTasks(gotTheTasks));

    },[toggleFetch]);


    return (
        <div>
            <div className="todo">
            <CreateToDo setToggleFetch= {setToggleFetch}/>
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
