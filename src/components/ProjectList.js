import React, { useState } from "react";
import "../assets/styles/Projects.css";

export default function ProjectList() {
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
        <button className="btn">+ Add Card</button>
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
  );
}
