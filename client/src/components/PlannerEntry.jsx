import { Link, useHistory } from "react-router-dom";
import { destoryPlannerEntry, updatePlannerEntry } from "../services";
import './PlannerEntry.css'

const PlannerEntry = (props) => {
    const { plannerDate, plannerInput } = props.plannerEntry;

    const history = useHistory();
    const id = props.plannerEntry._id;

    // const [entry, setEntry] = useState({});
    // const [date, setDate] = useState("");
    // const [text, setText] = useState("");
    // const params = useParams();
    // const entryId = params.id;

    const handleDelete = async () => {
        await destoryPlannerEntry(id);
        history.push("/home")
    }

    // const handleUpdate = async () => {
    //     await updatePlannerEntry(id);
    //     history.push("/home")
    // }

    return (
        <article className="entry">
            <section className="date">
            <h4>{ plannerDate }</h4>
            </section>
            <section className="text-entry">
            <h5>{ plannerInput }</h5>
            </section> 
            <Link to={`/edit/${id}`}>
                <button>Edit</button>
                </Link>
            <button onClick={handleDelete}>Delete</button>
        </article>
    )
}

export default PlannerEntry