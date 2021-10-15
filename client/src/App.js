import './App.css';
import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { verifyUser } from './services';
import Home from './screens/Home';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Register from './screens/Register';
import Nav from './components/Nav'
import Journal from './screens/Journal';
import NewJournal from './screens/NewJournal';
import CreatePlannerEntry from "./screens/CreatePlannerEntry"
import ToDoPage from './components/ToDoPage';
import CreateToDo from './screens/CreateToDo';
import { getAllJournals } from "./services/journal";

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const [journalEntries, setJournalEntries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
      getAllJournals().then((gotJournals) => setJournalEntries(gotJournals));
  }, []);

  useEffect(() => {
    verifyUser().then((verifiedUser) => setUser(verifiedUser));
  }, []);

  useEffect(() => {
    if (user && (location.pathname === "/login" || location.pathname === "/register")) {
      history.push("/home");
    } else if (!user && (location.pathname === "/home" || location.pathname === "/add-to-planner")) {
      history.push("/home");
    }
  }, [user, location.pathname, history]);

  return (
    <div className="App">
       {/* <Nav /> */}

      <Switch>
        {/* <main> */}
        <Route exact path = "/">
          <Landing />
        </Route>

        <Route path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route path="/register">
          <Register setUser={setUser} />
        </Route>

 
        <Route exact path="/home">
        <Nav />
          <Home />
        </Route>

    {/*To-Do Components */}
        <Route exact path="/add-to-do">
        <Nav />
          <CreateToDo />
        </Route>

        <Route exact path="/all-to-do">
        <Nav />
          <ToDoPage />
        </Route>
      {/*To-Do Components */}


        {/*Planner Components */}
        <Route path="/add-to-planner">
        <Nav />
        <CreatePlannerEntry />
        </Route>
        {/*Planner Components */}


        {/*Journal Components */}
        <Route path='/new-journal'>
        <Nav />
          <NewJournal />
        </Route>
        
        <Route path='/view-journal-entries'>
        <Nav/>
          <Journal />
        </Route>
        <Route path="/edit-journal/:id">
          <NewJournal journalEntries={journalEntries} setToggleFetch={setToggleFetch}/>
        </Route>
          {/*Journal Components */}


        {/* </main> */}
        </Switch>
 
    </div>
  );
}

export default App;
