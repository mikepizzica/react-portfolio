import react from "react";

function Resume() {
    return (
        <section id="resume">
            <h1>Resume</h1>
            <a rel="noreferrer" id="resume-link" href="https://docs.google.com/document/d/1M-TMOKGjUwbVCfruUq9cRhJBFnJ2jlQV/edit?usp=sharing&ouid=117672538973667414696&rtpof=true&sd=true" target="_blank">View/Download my FULL resume in Google Docs</a>
            <div id="proficiencies">
            <p>Front-End Proficiences</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>

            <p>Back-End Proficiences</p>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            </div>

        </section>
    )
};

export default Resume;