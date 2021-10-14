import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPlannerEntry } from "../services";

const CreatePlannerEntry = () => {
    const [plannerDate, setPlannerDate] = useState("");
    const [plannerInput, setPlannerInput] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const plannerEntry = {
                plannerDate,
                plannerInput,
            }
            await createPlannerEntry(plannerEntry);
            history.push("/home");
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <section>
            <h3>Add a new entry:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="start">Date:</label>
                <input type="date" id="start" name="trip-start" value={plannerDate} min="2015-01-01" max="2030-01-01" onChange={(e) => setPlannerDate(e.target.value)} />
                <label htmlFor="plannerInput">Entry:</label>
                <input id="plannerInput" type="text" value={plannerInput} onChange={(e) => setPlannerInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </section>
    )
}

export default CreatePlannerEntry;