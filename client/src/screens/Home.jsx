import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import Calendar from 'react-calendar';
import { getAllPlannerEntries } from "../services/index";
import { useHistory } from 'react-router';

const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);
    const history = useHistory();
    const [value, onChange] = useState(new Date());
    const minDate = new Date("10/11/2021");
    const maxDate = new Date("10/17/2021");

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
            <div>
                {allPlannerEntries.map((plannerEntry) => (
                    <PlannerEntry key={plannerEntry._id} plannerEntry={plannerEntry} />
                ))}
            </div>
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                    minDate= {minDate}
                    maxDate= {maxDate}
                    showWeekNumbers= {true}
                />
            </div>
        </section>
    )
}

export default Home;