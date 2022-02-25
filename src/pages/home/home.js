import React from "react";
import "./style.css";
import { Card, Image } from "react-bootstrap";
import trey from "../../assets/trey.png"

const Home = () => {
    return (
        <Card style={{ width: "100%" }} className="me">
      <Card.Body className="justify-content-center text-center">
          <Image className="img-fluid w-25 mb-2" src={trey} alt="card-img" md={1} roundedCircle />
        <Card.Title className="text-center">Trey Rogers</Card.Title>
        <Card.Subtitle className="text-center">
          Full Stack Web Developer
        </Card.Subtitle>
        <Card.Text className="m-2 mt-5 text-left">
          I am a brand new Full Stack Web Developer looking for Junior developer positions. I have been coding for a little over 3 months now, and have enjoyed learning each language/technology thouroughly.
        </Card.Text>
      </Card.Body>
    </Card>
    );
};

export default Home