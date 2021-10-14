import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import { getAllPlannerEntries } from "../services/index";

const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);

    useEffect(() => {
        // console.log(allPlannerEntries)
        getAllPlannerEntries().then((gotPlannerEntries) => setPlannerEntries(gotPlannerEntries));

    }, []);

    return (
        <section>
            <h3>Planner Entries</h3>
            <div>
                {allPlannerEntries.map((plannerEntry) => (
                    <PlannerEntry key={plannerEntry._id} plannerEntry={plannerEntry} />
                ))}
            </div>
        </section>
    )
}

export default Home;