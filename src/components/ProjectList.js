import React from "react";
import "../assets/styles/Projects.css";

export default function ProjectList() {
  return (
    <section>
      {/* To Do Projects */}

      <section className="section-container to-do-projects">
        <h1>To Do</h1>
        <ol>
          <li>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>
      {/* Projects In Progress Section */}
      <section className="section-container in-progress-projects">
        <h1>In Progress</h1>
        <ol>
          <li>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>
      {/* Projects Completed Section */}
      <section className="section-container completed-projects">
        <h1>Completed</h1>
        <ol>
          <li>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </section>
  );
}
