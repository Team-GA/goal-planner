import './App.css';
import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const verifyUser = async () => {
      const verifiedUser = await verifyUser;
    }
     verifyUser().then((verifiedUser) => setUser(verifiedUser));
  }, []);

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

      <Route exact path="/">
        <Home />
        </Route>

      <Route path="/login">
        <Login setUser={setUser}/>
        </Route>

        <Route path="/register">
        <Register setUser={setUser}/>
        </Route>

        <Route>
          Journal
        </Route>
        <Route>
        
        </Route>
        <Route>
        Todo list
        </Route>
    </Switch>
    </div>
  );
}

export default App;
