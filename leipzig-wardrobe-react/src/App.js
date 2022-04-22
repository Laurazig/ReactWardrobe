import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Views/Home";
import Create from "./Views/Create";
import Workshops from "./Views/Workshops";
import './App.css';
import NotFound from "./Views/NotFound";


function App() {
  const [workshops, setWorkshops] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setWorkshops(pretendFetch)
  }, [])
  const pretendFetch = () => {
    return [
      {
        id: "1",
        name: "Volkshochschule",
        workshop: "Tailoring basics",
        location: "City center",
        date: "26.04.22",
        price: "20€",
        link: "https://www.vhs-leipzig.de/programm/kunst-kultur-kreativitaet.html?action%5B92%5D=category&cat_ID=495-CAT-KAT168"
      },
      {
        id: "2",
        name: "Daniela Witt",
        workshop: "Hoodie/T-shirt",
        location: "Leutzsch",
        date: "23.04.22",
        price: "60€",
        link: "https://dawitt.de/naehkurse-leipzig/"
      },
      {
        id: "3",
        name: "Susanne Welle - SW Handmade ",
        workshop: "Hoodie",
        location: "Plagwitz",
        date: "27.04.22",
        price: "37€",
        link: "https://sw-handmade.de/start.html"
      },
    ]
  }

  const updateWorkshopName = newName => {
    setName(newName)
  }

  const updateWorkshop = newWorkshop => {
    setWorkshops(workshops.concat(newWorkshop));
    setName("");
  }
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact>
              <Create />
            </Route>
            <Route path="/workshops" exact>
              <Workshops
                workshops={workshops}
                name={name}
                updateName={updateWorkshopName}
                update={updateWorkshop}
              />
            </Route>
      
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
export default App;
