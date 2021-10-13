import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
  
    <Switch>

      <Route exact path="/">
        <Home />
        </Route>

      <Route path="/login">
        <Login />
        </Route>

        <Route path="/register">
        <Register />
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
