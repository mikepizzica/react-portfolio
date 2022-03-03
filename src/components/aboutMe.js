import react from "react";

function aboutMe() {
    return (
        <section id="about-me">
            <h1>About me</h1>
            <img src={process.env.PUBLIC_URL + '/assets/images/MikePizzica1000x1000.jpg'} alt="mike pizzica" id="headshot" />
            <p>Full-Stack Web Developer with an extensive background in Analytics, Digital Marketing, and Customer Service. Recently earned a Full-Stack Web Development Certificate from Penn LPS and have developed skills in HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars, and React. In my six years working in Analytics for a Philly-based Digital Marketing company I managed millions of dollars in ad spend, grew teams, and improved processes. With my new skills I’m looking to take on new challenges, build new things, and make meaningful, positive impacts on future projects.</p>
        </section>
    );
}

export default aboutMe;