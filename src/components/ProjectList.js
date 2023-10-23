import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../assets/styles/Projects.css";
import axios from "axios";

export default function ProjectList() {
  // modal functionality
  const [show, setShow] = useState(false);
  const [projectDescription, setProjectDescription] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // project lists

  let [projectToDo, addToDo] = useState([]);
  let [projectInProgress, addInProgress] = useState([]);
  let [projectCompleted, addCompleted] = useState([]);

  // Get the projects from the API endpoint
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/projects", {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((response) => {
        console.log(response);
        addProjectToDo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data");
        throw error;
      });
  }, []);

  // Add project to the to do array and close the modal
  const addProjectToDo = (e) => {
    console.log(projectDescription);
    addToDo([...projectToDo, { Details: projectDescription }]);
    console.log(projectToDo);
    handleClose();
  };

  return (
    <section className="projects-container">
      {/* To Do Projects */}

      <section className="section-container to-do-projects">
        <h1>To Do</h1>
        <ol>
          {projectToDo.map((project, i) => {
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
