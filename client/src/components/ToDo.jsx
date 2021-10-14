import {Link} from "react-router-dom"

const ToDo = (props) => {
    const { task } = props;
    // console.log(task)

    return(
        <article>
            <h4>{task}</h4>
            <Link to="/add-to-do">
                <button>create a to do</button>
            </Link>
        </article>
    )
}
export default ToDo;