import React from "react";
import Card from "../components/card";
import swab from "../assets/larger-logo.png";
import comic from "../assets/comic.png";
import employee from "../assets/employee.png";
import business from "../assets/business.png";

const projectArr = [
  {
    name: "Swab-Swap",
    description:
      "Easy way to connect with neighbors and exchange COVID-19 at home test kits.",
    picture: swab,
    repo: "https://github.com/emilyshurtz94/swab-swap",
    deployed: "https://swab-swap.herokuapp.com/",
  },
  {
    name: "E-commerce Back End",
    description:
    "Utilizing Express.js API to use Sequelize to interact with a MySQL database.",
    picture: business,
    repo: " https://github.com/TreyRogers7/Backend-ORM-E-Commerce-",
    deployed: " https://watch.screencastify.com/v/DZ1Q4Ug7p3WsYzLUraDr"
  },
  {
    name: "Marvel Comic Locator",
    description: "An easy way to access marvel comics and comic book stores",
    picture: comic,
    repo: "https://github.com/emilyshurtz94/Group-Project-1",
    deployed: "https://emilyshurtz94.github.io/Group-Project-1/"
  },
  {
    name: "Employee Tracker",
    description:
      "Be able to access all employee data and use CRUD operations on all information",
    picture: employee,
    repo: " https://github.com/TreyRogers7/employee-tracker",
    deployed: " https://watch.screencastify.com/v/xHP2Ro07QBRJjsbB77h8"
  },
];

const Projects = () => {
  return (
    <div className="container">
      <div className="card-group mt-5">
        {projectArr.map((app) => (
          <Card
            picture={app.picture}
            name={app.name}
            description={app.description}
            repo={app.repo}
            deployed={app.deployed}
          />
        ))}
      </div>
    <footer>
    </footer>
    </div>
  );
};

export default Projects;
