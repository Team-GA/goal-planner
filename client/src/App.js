import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
  
    <Switch>

      <Route exact path="/">
        home
        </Route>

      <Route path>
        login
        </Route>

        <Route>
        Register
        </Route>

        <Route>
        
        </Route>
        <Route>
        
        </Route>
        <Route>
        
        </Route>
    </Switch>
    </div>
  );
}

export default App;
