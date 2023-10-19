import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../assets/styles/Projects.css";

export default function ProjectList() {
  // modal functionality
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // project lists

  let [projectToDo, addToDo] = useState([
    {
      ProjectTitle: "Project 1",
      Details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      ProjectTitle: "Project 2",
      Details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]);
  let [projectInProgress, addInProgress] = useState([
    {
      ProjectTitle: "Project 3",
      Details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      ProjectTitle: "Project 4",
      Details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]);
  let [projectCompleted, addCompleted] = useState([
    {
      ProjectTitle: "Project 5",
      Details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      ProjectTitle: "Project 6",
      Details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]);

  //   Add project to the to do array and close the modal

  const addProjectToDo = (e) => {
    console.log(e);

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
              <Form.Control as="textarea" rows={3} name="project-description" />
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
