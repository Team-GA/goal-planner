import { useHistory } from "react-router-dom";
import { destoryPlannerEntry } from "../services";

const PlannerEntry = (props) => {
    const { plannerDate, plannerInput } = props.plannerEntry;

    const history = useHistory();
    const id = props.plannerEntry._id;

    const handleDelete = async () => {
        await destoryPlannerEntry(id);
        history.push("/home")
    }

    return (
        <article className="entry">
            <section className="date">
            <h4>{ plannerDate }</h4>
            </section>
            <section className="text-entry">
            <h5>{ plannerInput }</h5>
            </section> 
            <button onClick={handleDelete}>Delete</button>
        </article>
    )
}

export default PlannerEntry