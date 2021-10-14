import {Link} from "react-router-dom"

const ToDo = () => {
    // const { task } = props.task;
    // console.log(task)

    return(
        <article>
            <h3></h3>
            <Link to="/add-to-do">
                <button>create a to do</button>
            </Link>
        </article>
    )
}
export default ToDo;