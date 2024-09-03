import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>BookyfyMe - Travel Planner App</h3>
        <p>BookyfyMe is a multifunctional planning application that combines the features of a calendar, daily planner, and travel planner. Inspired by the Timepage app by Moleskine, BookyfyMe offers users the ability to manage their daily tasks and appointments, as well as plan trips, book flights, accommodations, and discover upcoming events at destinations.</p>
        <p><strong>Key Technologies: </strong> React, Redux, Node.js, PostgreSQL, API Integration</p>
      </div>
      <div className="project">
        <h3>CareCrowd - Telegram Bot</h3>
        <p>Developed a Telegram bot for volunteer assistance, integrating donation processing, volunteer search, and NLP text query analysis. Implemented user interaction, API communication, and error handling for seamless functionality.</p>
        <p><strong>Key Technologies: </strong> Python, OOP, API, JSON, NLP, Telegram Bot API</p>
      </div>
      <div className="project">
        <h3>Budgeggrator - Financial Aggregator</h3>
        <p>Consolidates cash, credit and debit cards, investments, and cryptocurrency. Offered the ability to convert and view balances in your preferred currency. Provided a complete view of your finances for easy management and expense optimization.</p>
        <p><strong>Key Technologies: </strong> Node.js, CSS, PostgreSQL</p>
      </div>
    </div>
  );
}

export default Projects;