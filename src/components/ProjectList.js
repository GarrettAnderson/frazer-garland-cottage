import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";
import { createProject } from "../graphql/mutations";
import { listProjects } from "../graphql/queries";
import MobileNav from "./Navigation/MobileNav";
import Hamburger from "./Navigation/Hamburger";
import DesktopNav from "./Navigation/DesktopNav";
import "../assets/styles/Projects.css";
import axios from "axios";

const client = generateClient();

export default function ProjectList() {
  // modal functionality
  const [show, setShow] = useState(false);
  const [projectDescription, setProjectDescription] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // project lists

  let [projects, addToProjects] = useState([]);
  let [projectInProgress, addInProgress] = useState([]);
  let [projectCompleted, addCompleted] = useState([]);

  // Get the projects from the API endpoint
  useEffect(() => {
    console.log("test");
    getProjects();
  }, []);

  const getProjects = async () => {
    const result = await client.graphql({
      query: listProjects,
    });
    addToProjects(result.data.listProjects.items);
  };
  // Add project to the to do array and close the modal
  const addProjectToDo = (e) => {
    console.log(projectDescription);
    // addToDo([...projectToDo, { Details: projectDescription }]);
    // console.log(projectToDo);

    axios
      .post("http://localhost:3001/api/new-project", {
        project_details: projectDescription,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    handleClose();
    window.location.reload();
  };

  // Delete a project from database
  const deleteProject = (id) => {
    console.log("Delete project:", id);

    axios
      .delete(`http://localhost:3001/api/project/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    window.location.reload();
  };

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = (x) => {
    console.log(x, "hamburger open");
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <section className="projects-container">
      <header>
        <div className="site-navigation">
          {/* Navigation menus */}
          <Hamburger onClick={toggleHamburger} />
          <MobileNav toggleNav={hamburgerOpen} />
          <DesktopNav />
        </div>
      </header>

      <section className="project-status-container">
        {/* To Do Projects */}
        <section className="section-container to-do-projects">
          <h1>To Do</h1>
          <ol>
            {projects.map((project, i) => {
              return (
                <li key={i}>
                  <div className="card">
                    <div className="card-body project-card-details">
                      {/* <h5 className="card-title">{project.ProjectTitle}</h5> */}
                      <p className="card-text">{project.project_details}</p>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => {
                          deleteProject(project.id);
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* open model to add card */}
          <button className="btn" onClick={handleShow}>
            + Add Card
          </button>
        </section>
        {/* Projects In Progress Section */}
        <section className="section-container in-progress-projects">
          <h1>In Progress</h1>
          <ol>
            {projectInProgress.map((project, i) => {
              return (
                <li key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{project.ProjectTitle}</h5>
                      <p className="card-text">{project.Details}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Projects Completed Section */}
        <section className="section-container completed-projects">
          <h1>Completed</h1>
          <ol>
            {projectCompleted.map((project, i) => {
              return (
                <li key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{project.ProjectTitle}</h5>
                      <p className="card-text">{project.Details}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </section>
      {/* Add project modal */}
      <Modal show={show} onHide={handleClose}>
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
      </Modal>
    </section>
  );
}
