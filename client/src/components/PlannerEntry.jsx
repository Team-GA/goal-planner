import { useHistory, useParams } from "react-router-dom";
import { destoryPlannerEntry, getPlannerEntryById } from "../services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlannerEntry = (props) => {
  const { plannerDate, plannerInput } = props.plannerEntry;
  // const [toggleFetch, setToggleFetch] = useState(false);
  const [entry, setEntry] = useState({});
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const history = useHistory();
  const params = useParams();
  const entryId = params.id;

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
      <section className="date">
        <h4>{plannerDate}</h4>
      </section>
      <section className="text-entry">
        <h5>{plannerInput}</h5>
      </section>
        <Link to={`/edit-planner/${props.plannerEntry._id}`}>
                <button>Edit</button>
        </Link>
      <button onClick={handleDelete}>Delete</button>

    </article>
  );
};

export default PlannerEntry;
