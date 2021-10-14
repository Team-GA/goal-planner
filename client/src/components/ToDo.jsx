import {Link} from "react-router-dom"

const toDo = (props) => {
    const { task } = props.task;
    return(
        <article>
            <h3>{task}</h3>
            <Link to="/add-to-do">
                <button>create a to do</button>
            </Link>
        </article>
    )
}
export default toDo;