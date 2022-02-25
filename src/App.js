import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/nav";
import Contact from "./pages/contact/contact.js";
import Projects from "./pages/projects/projects";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  document.title = "Trey Rogers";
  return (
    <Router>
    <div className= "origin">
      <Navbar />
      <Wrapper>
        <Container className ="align-content-center mt-4">
          <Row className= "justify-content-center">
            <Col className= "justify-content-center" xl ={9} md= {10} xs= {11}>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
