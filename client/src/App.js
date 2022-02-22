import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/nav';
import Projects from './pages/projects';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/projects" component = {Projects}/>
      </Switch>
    </Router>
  );
}

export default App;
