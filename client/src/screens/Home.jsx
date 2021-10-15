import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import Calendar from '../components/Calendar.jsx';
import { getAllPlannerEntries } from "../services/index";
import { useHistory } from 'react-router-dom';


const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);
    const history = useHistory();

    useEffect(() => {
        // console.log(allPlannerEntries)
        getAllPlannerEntries().then((gotPlannerEntries) => setPlannerEntries(gotPlannerEntries));

    }, [toggleFetch]);

    const logout = async (e, userInfo) => {
        e.preventDefault();
        try {
            localStorage.removeItem("token", userInfo)
            window.localStorage.clear();
            history.push("/Login")
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <section>
            <header className="home-header">
                <button id="logout-btn" onClick={logout}>logout</button>
            </header>
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