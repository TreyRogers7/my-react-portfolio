import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/nav";
import Contact from "./pages/contact.js";
import Projects from "./pages/projects";

function App() {
  document.title = "Trey Rogers";
  return (
    <body className="background">
      <div className="origin">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </body>
  );
}

export default App;
