import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";
import "../assets/styles/Home.css";
import "../assets/styles/Projects.css";
import "../assets/styles/DesktopNav.css";
import MobileNav from "./Navigation/MobileNav";
import InternalDesktopNav from "./Navigation/InternalDesktopNav";
import Hamburger from "./Navigation/Hamburger";
import Projects from "../assets/data/projects.json";
import axios from "axios";

export default function ProjectList() {
  // modal functionality
  const [show, setShow] = useState(false);
  const [projectDescription, setProjectDescription] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // project lists
  const [projects, addProject] = useState(Projects);
  // let [projectToDo, addToDo] = useState([]);
  // let [projectInProgress, addInProgress] = useState([]);
  // let [projectCompleted, addCompleted] = useState([]);

  console.log(projects.cottage_projects);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
    console.log("hamburger open", !hamburgerOpen);
  };

  // Get the projects from the API endpoint
  // useEffect(() => {
  //   console.log("test");
  //   axios
  //     .get("http://localhost:3001/api/projects", {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "POST, GET, PUT",
  //         "Access-Control-Allow-Headers": "Content-Type",
  //         "Content-Type": "application/json",
  //         mode: "cors",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.data);
  //       addToDo(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data");
  //       throw error;
  //     });
  // }, []);

  // Add project to the to do array and close the modal
  // const addProjectToDo = (e) => {
  //   console.log(projectDescription);
  // addToDo([...projectToDo, { Details: projectDescription }]);
  // console.log(projectToDo);

  //   axios
  //     .post("http://localhost:3001/api/new-project", {
  //       project_details: projectDescription,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   handleClose();
  //   window.location.reload();
  // };

  // Delete a project from database
  // const deleteProject = (id) => {
  //   console.log("Delete project:", id);

  //   axios
  //     .delete(`http://localhost:3001/api/project/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   window.location.reload();
  // };

  return (
    <section className="universal_background-img projects_main-content">
      <nav className="internal_nav-container">
        <Hamburger onClickHamburger={toggleHamburger} />
        <MobileNav toggleNav={hamburgerOpen} />
        <InternalDesktopNav />
      </nav>

      {/* To Do Projects */}
      <section className="universal_page-title projects_title">
        <h1>Projects</h1>
      </section>
      <section class="projects-wrapper">
        <section className="section-container to-do-projects">
          <h1>To Do</h1>
          <ol>
            {projects.cottage_projects.map((project, i) =>
              project.status === "Scheduled" ? (
                <li key={i}>
                  <div className="card">
                    <div className="card-body project-card-details">
                      <h5 className="card-title">{project.title}</h5>
                      {/* <p className="card-text">{project.project_details}</p>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        deleteProject(project.id);
                      }}
                    /> */}
                    </div>
                  </div>
                </li>
              ) : (
                <div></div>
              )
            )}
          </ol>

          {/* open model to add card */}
          {/* <button className="btn" onClick={handleShow}>
          + Add Card
        </button> */}
        </section>
        {/* Projects In Progress Section */}
        <section className="section-container in-progress-projects">
          <h1>In Progress</h1>
          <ol>
            {projects.cottage_projects.map((project, i) =>
              project.status === "In Progress" ? (
                <li key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      {/* <p className="card-text">{project.Details}</p> */}
                    </div>
                  </div>
                </li>
              ) : (
                <div></div>
              )
            )}
          </ol>
        </section>
        {/* Projects Completed Section */}
        <section className="section-container completed-projects">
          <h1>Completed</h1>
          <ol>
            {projects.cottage_projects.map((project, i) =>
              project.status === "Completed" ? (
                <li key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      {/* <p className="card-text">{project.Details}</p> */}
                    </div>
                  </div>
                </li>
              ) : (
                <div></div>
              )
            )}
          </ol>
        </section>
      </section>

      {/* Add project modal */}
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add To Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="project-description">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="project-description"
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProjectToDo}>
            Add To Do
          </Button>
        </Modal.Footer>
      </Modal> */}
    </section>
  );
}
