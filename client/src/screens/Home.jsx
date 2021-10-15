import { useEffect, useState } from "react";
import PlannerEntry from "../components/PlannerEntry";
import Calendar from '../Calendar.js';
import Details from '../Details.js';
// import Calendar from 'react-calendar';
import { getAllPlannerEntries } from "../services/index";
import { useHistory } from 'react-router';
import "../styles.css";

const Home = () => {
    const [allPlannerEntries, setPlannerEntries] = useState([]);
    const history = useHistory();
    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState(null);


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

    const showDetailsHandle = (dayStr) => {
        setData(dayStr);
        setShowDetails(true);
      };
    

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
            <div className="App">
                <h1>Week View Calendar with react</h1>
                <br />
                <h2>Example</h2>
                <Calendar showDetailsHandle={showDetailsHandle} />
                <br />
                {showDetails && <Details data={data} />}
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