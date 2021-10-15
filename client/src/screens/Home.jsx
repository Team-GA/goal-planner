import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import { getAllPlannerEntries } from "../services/index";

const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);
    const [value, onChange] = useState(new Date());
    const minDate = new Date("10/11/2021");
    const maxDate = new Date("10/17/2021");

    useEffect(() => {
        // console.log(allPlannerEntries)
        getAllPlannerEntries().then((gotPlannerEntries) => setPlannerEntries(gotPlannerEntries));

    }, []);

    return (
        <section>
            <h3>Planner Entries</h3>
            <div className="post">
                {allPlannerEntries.map((plannerEntry) => (
                    <PlannerEntry key={plannerEntry._id} plannerEntry={plannerEntry} />
                ))}
            </div>
            {/* <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                    minDate= {minDate}
                    maxDate= {maxDate}
                    showWeekNumbers= {true}
                />
            </div> */}
        </section>
    )
}

export default Home;