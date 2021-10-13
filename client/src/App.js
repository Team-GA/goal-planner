import './App.css';
import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
// import Home from './screens/Home';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Nav from './components/Nav';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const location = useLocation();

  // useEffect(() => {
  //   const verifyUser = async () => {
  //     const verifiedUser = await verifyUser;
  //   }
  //   verifyUser().then((verifiedUser) => setUser(verifiedUser));
  // }, []);

  useEffect(() => {
    if (user && (location.pathname === "/login" || location.pathname === "/register")) {
      history.push("/");
    } else if (!user && (location.pathname === "/" || location.pathname === "/new-book")) {
      history.push("/login");
    }
  }, [user, location.pathname, history]);

  return (
    <div className="App">
      <Switch>
        <Route path = '/'>
          <Home />
        </Route>  
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route path="/register">
          <Register setUser={setUser} />
        </Route>

        <Nav />

        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="add-to-do">
          <h1>This is where we will add to the To-Do List!</h1>
        </Route>

        <Route path="/add-to-planner">
          <h1>This is where we will add to the planner!</h1>
        </Route>

        <Route path='new-journal'>
          <h1>This is where we will add new journal entries!</h1>
        </Route>
        
        <Route path='view-journal-entries'>
          <h1>This is where we will view journal entries!</h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
