import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createTask, updateTask } from "../services/toDoServices";


function CreateToDo(props) {
  const [task, setTask] = useState("");
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      const todo = props.tasks.find((todo) => todo._id === params.id);
      if (todo) {
        setTask(todo.task);
      }
    }
  }, [params.id, props.tasks]);

  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
      const taskEntry = {
        task,
      };
      if (params.id) {
        await updateTask(params.id, taskEntry);
        history.push("/all-to-do");
      } else {
        await createTask(taskEntry);
        history.push("/all-to-do");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <section>
      <h4>adding a task</h4>
      <form onSubmit={handelSubmit}>
        <label htmlFor="task">task:</label>
        <input
          id="task"
          className="to-do-input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type="submit">Submit Task</button>
      </form>
    </section>
  );
}
export default CreateToDo;
