import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createPlannerEntry, updatePlannerEntry, destoryPlannerEntry, getPlannerEntryById } from "../services";
import "./CreatePlannerEntry.css";

const EditDeletePlannerEntry = (props) => {
  const [plannerDate, setPlannerDate] = useState("");
  const [plannerInput, setPlannerInput] = useState("");
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      const planner = props.plannerEntries.find(
        (planner) => planner._id === params.id
      );
      if (planner) {
        setPlannerDate(planner.plannerDate);
        setPlannerInput(planner.plannerInput);
      }
    }
  }, [params.id, props.plannerEntries]);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const plannerEntry = {
        plannerDate,
        plannerInput,
      };
      if (params.id) {
        await updatePlannerEntry(params.id, plannerEntry);
        history.push("/home");
      } else {
        await createPlannerEntry(plannerEntry);
        history.push("/home");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async () => {
    await destoryPlannerEntry(params.id);
  };

  return (
    <section>
      <div className="add-container">
          <h3>Edit your planner entry:</h3>
        <form className="planner-entry" onSubmit={handleSubmit}>
          <label htmlFor="start">Date:</label>
          <input
            type="datetime-local"
            id="start"
            name="trip-start"
            value={plannerDate}
            min="2015-01-01"
            max="2030-01-01"
            onChange={(e) => setPlannerDate(e.target.value)}
          />
          <label htmlFor="plannerInput">Entry:</label>
          <textarea
            id="plannerInput"
            type="text"
            required
            tabIndex="3"
            cols="40"
            rows="10"
            value={plannerInput}
            onChange={(e) => setPlannerInput(e.target.value)}
          />
          <button id="planner-button" type="submit">Submit!</button>
          <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
        </form>
      </div>
    </section>
  );
};

export default EditDeletePlannerEntry;