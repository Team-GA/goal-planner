import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import { getAllPlannerEntries } from "../services/index";
import { useHistory } from 'react-router';

const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);
    const history = useHistory();

    useEffect(() => {
        // console.log(allPlannerEntries)
        getAllPlannerEntries().then((gotPlannerEntries) => setPlannerEntries(gotPlannerEntries));

    }, []);

    const logout = async (e,userInfo) => {
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
            <div>
                {allPlannerEntries.map((plannerEntry) => (
                    <PlannerEntry key={plannerEntry._id} plannerEntry={plannerEntry} />
                ))}
            </div>
        </section>
    )
}

export default Home;