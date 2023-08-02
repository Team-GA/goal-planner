import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import Calendar from '../components/Calendar.jsx';
import { getAllPlannerEntries } from "../services/index";
import './Home.css'
import ToDoPage from "../components/ToDoPage";

const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);
    const [ toggleFetch, setToggleFetch ] = useState(false)

    useEffect(() => {
        // console.log(allPlannerEntries)
        getAllPlannerEntries().then((gotPlannerEntries) => setPlannerEntries(gotPlannerEntries));

    }, [toggleFetch]);


    return (
        <section className='background'>
            <h4>
                <ToDoPage/>
            </h4>
            <h3>Planner:</h3>
            <Calendar plannerEntries={allPlannerEntries}/>

        </section>
    )
}

export default Home;