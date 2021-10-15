import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import Calendar from '../components/Calendar.jsx';
import { getAllPlannerEntries } from "../services/index";



const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);
    const [ toggleFetch, setToggleFetch ] = useState(false)


    useEffect(() => {
        // console.log(allPlannerEntries)
        getAllPlannerEntries().then((gotPlannerEntries) => setPlannerEntries(gotPlannerEntries));

    }, [toggleFetch]);


    return (
        <section>
            <h3>Planner Entries</h3>
            <div className="post">
                {allPlannerEntries.map((plannerEntry) => (
                    <PlannerEntry setToggleFetch={setToggleFetch} key={plannerEntry._id} plannerEntry={plannerEntry} />
                ))}
            </div>
            <Calendar plannerEntries={allPlannerEntries}/>

        </section>
    )
}

export default Home;