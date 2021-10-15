import { destoryPlannerEntry, getPlannerEntryById } from "../services";
import { useEffect, useState } from "react";

const PlannerEntry = (props) => {
    const [entry, setEntry] = useState({});

    const id = props.plannerEntry._id;

    useEffect(() => {
        getPlannerEntryById(id).then((gotPlannerEntry) => setEntry(gotPlannerEntry));
    }, [id])


    const handleDelete = async () => {
        await destoryPlannerEntry(id);
        props.setToggleFetch((curr) => !curr);
    }

    return (
        <article className="entry">
            <section className="date">
            <h4>{ entry.plannerDate }</h4>
            </section>
            <section className="text-entry">
            <h5>{ entry.plannerInput }</h5>
            </section> 
            <button onClick={handleDelete}>Delete</button>
        </article>
    )
}

export default PlannerEntry