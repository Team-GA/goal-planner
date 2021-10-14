import './App.css';
import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { verifyUser } from './services';
import Home from './screens/Home';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Register from './screens/Register';
import Nav from './components/Nav'

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const location = useLocation();

  // useEffect(() => {
  //   verifyUser().then((verifiedUser) => setUser(verifiedUser));
  // }, []);

  // useEffect(() => {
  //   if (user && (location.pathname === "/login" || location.pathname === "/register")) {
  //     history.push("/home");
  //   } else if (!user && (location.pathname === "/home" || location.pathname === "/add-to-planner")) {
  //     history.push("/home");
  //   }
  // }, [user, location.pathname, history]);

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

        {/* <Nav /> */}
 
        <Route exact path="/home">
        <Nav />
          <Home />
        </Route>

        <Route path="/add-to-do">
        <Nav />
          <h1>This is where we will add to the To-Do List!</h1>
        </Route>

        <Route path="/add-to-planner">
        <Nav />
          <h1>This is where we will add to the planner!</h1>
        </Route>

        <Route path='/new-journal'>
        <Nav />
          <h1>This is where we will add new journal entries!</h1>
        </Route>
        
        <Route path='/view-journal-entries'>
        <Nav/>
          <h1>This is where we will view journal entries!</h1>
        </Route>
        {/* </main> */}
        </Switch>
 
    </div>
  );
}

export default App;
