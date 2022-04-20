import React from "react";
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Views/Home";
import Create from "./Views/Create";
import Workshops from "./Views/Workshops";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <header className="App-header">
              <Navigation />
            </header>
            <main>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/create" exact>
                  <Create />
                </Route>
                <Route path="/workshops" exact>
                  <Workshops />
                </Route>
                <Redirect to="/" />
              </Switch>
            </main>
        </Router>

      
    </div>
  );
}

export default App;
