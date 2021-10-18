import { destoryPlannerEntry, getPlannerEntryById } from "../services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlannerEntry = (props) => {
  const [entry, setEntry] = useState({});

  const id = props.plannerEntry._id;

  useEffect(() => {
    getPlannerEntryById(id).then((gotPlannerEntry) =>
      setEntry(gotPlannerEntry)
    );
  }, [id]);

  const handleDelete = async () => {
    await destoryPlannerEntry(id);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <article className="entry">
      <section className="date">{entry.plannerDate}</section>
      <section className="text-entry">
        <h4>{entry.plannerInput}</h4>
      </section>
      <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
      <Link to={`/edit-planner/${props.plannerEntry._id}`}>
                <button>Edit</button>
        </Link>
    </article>
  );
};

export default PlannerEntry;
