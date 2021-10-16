import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { verifyUser } from "./services";
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Nav from "./components/Nav";
import Journal from "./screens/Journal";
import NewJournal from "./screens/NewJournal";
import CreatePlannerEntry from "./screens/CreatePlannerEntry";
import ToDoPage from "./components/ToDoPage";
import CreateToDo from "./screens/CreateToDo";
import { getAllJournals } from "./services/journal";
import { getAllPlannerEntries } from "./services/index";
import { getAllTasks } from "./services/toDoServices";

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const [journalEntries, setJournalEntries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [tasks, setTasks] = useState({});
  const [plannerEntries, setPlannerEntries] = useState({});
  // journal props for edit
  useEffect(() => {
    getAllJournals().then((gotJournals) => setJournalEntries(gotJournals));
  }, []);
  // journal

  //planner props for edit
  useEffect(() => {
    getAllPlannerEntries().then((gotPlannerEntries) =>
      setPlannerEntries(gotPlannerEntries)
    );
  }, []);
  // planner

  // to do props for edit
  useEffect(() => {
    getAllTasks().then((gotTheTasks) => setTasks(gotTheTasks));
  }, []);
  // to do

  useEffect(() => {
    verifyUser().then((verifiedUser) => setUser(verifiedUser));
  }, []);

  useEffect(() => {
    if (
      user &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      history.push("/home");
    } else if (
      !user &&
      (location.pathname === "/home" || location.pathname === "/add-to-planner")
    ) {
      history.push("/home");
    }
  }, [user, location.pathname, history]);

  return (
    <div className="App">
      <Switch>
        {/* <main> */}
        <Route exact path="/">
          <Nav user={user} />
          <Landing />
        </Route>

        <Route path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route path="/register">
          <Register setUser={setUser} />
        </Route>

        <Route exact path="/home">
        <Nav user={user} />
          <Home setUser={setUser} />
        </Route>

        {/*To-Do Components */}
        <Route exact path="/add-to-do">
          <Nav user={user} />
          <CreateToDo />
        </Route>

        <Route exact path="/all-to-do">
          <Nav user={user} />
          <ToDoPage />
        </Route>

        <Route path="/edit-to-do/:id">
          <Nav user={user} />
          <CreateToDo tasks={tasks} />
        </Route>
        {/*To-Do Components */}

        {/*Planner Components */}
        <Route path="/add-to-planner">
          <Nav user={user} />
          <CreatePlannerEntry />
        </Route>

        <Route path="/edit-planner/:id">
        <Nav user={user} />
          <CreatePlannerEntry plannerEntries={plannerEntries}/>
        </Route>
        {/*Planner Components */}

        {/*Journal Components */}
        <Route path="/new-journal">
          <Nav user={user} />
          <NewJournal />
        </Route>

        <Route path="/view-journal-entries">
          <Nav user={user} />
          <Journal />
        </Route>
        <Route path="/edit-journal/:id">
          <NewJournal
            journalEntries={journalEntries}
            setToggleFetch={setToggleFetch}
          />
        </Route>
        {/*Journal Components */}

        {/* </main> */}
      </Switch>
    </div>
  );
}

export default App;
