import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/nav';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/about" component = {About}/>
        <Route path = "/projects" component = {Projects}/>
        <Route path = "/contact" component = {Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
