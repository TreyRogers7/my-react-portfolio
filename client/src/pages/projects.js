import React from "react";
import Card from "../components/card";

const swab = {
  name: "Swab-Swap",
  description:
    "Easy way to connect with neighbors and exchange COVID-19 at home test kits.",
  picture: "",
  link: ""
};

const marvel = {
  name: "Marvel Comic Locator",
  description:
    "An easy way to access marvel comics and comic book stores",
    picture: ""
};

const commerce = {
  name: "E-commerce Back End",
  description:
    "Utilizing Express.js API to use Sequelize to interact with a MySQL database.",
    picture: ""
};

const management = {
  name: "Employee Management System",
  description:
    "Be able to access all employee data and use CRUD operations on all information",
    picture: ""
};

const Projects = () => {
  return (
    <div>
      <Card picture={swab.picture} name={swab.name} description={swab.description}/>
      <Card name={marvel.name} description={marvel.description} link={swab.link}/>
      <Card name={commerce.name} description={commerce.description}/>
      <Card name={management.name} description={management.description}/>
    </div>
  );
};

export default Projects;
