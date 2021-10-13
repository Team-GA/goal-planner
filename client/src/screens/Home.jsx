import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import { getAllPlannerEntries } from "../services";

const Home = () => {
    const [plannerEntries, setPlannerEntries] = useState([]);

    useEffect(() => {
        getAllPlannerEntries.then((gotPlannerEntries) => setPlannerEntries(gotPlannerEntries));
    }, []);

    return (
        <section>
            <h3>Planner Entries</h3>
            <div>
                {plannerEntries.map((plannerEntry) => (
                    <PlannerEntry key={plannerEntry._id} plannerEntry={plannerEntry} />
                ))}
            </div>
        </section>
    )
}

export default Home;