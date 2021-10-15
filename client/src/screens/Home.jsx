import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import { getAllPlannerEntries } from "../services/index";
import { useHistory } from 'react-router';
import './Home.css'
const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);
    const history = useHistory();

    useEffect(() => {
        // console.log(allPlannerEntries)
        getAllPlannerEntries().then((gotPlannerEntries) => setPlannerEntries(gotPlannerEntries));

    }, []);

    const logout = async (userInfo) => {
        try {
            localStorage.removeItem("token", userInfo)
            history.push("/")
            
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
                    <PlannerEntry key={plannerEntry._id} plannerEntry={plannerEntry} />
                ))}
            </div>
        </section>
    )
}

export default Home;