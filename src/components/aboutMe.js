import react from "react";

function aboutMe() {
    return (
        <div id="about-me">
            <h1>About me</h1>
            <img src={process.env.PUBLIC_URL + '/assets/images/MikePizzica1000x1000.jpg'} alt="mike pizzica" id="headshot" />
            <p>Full-Stack Web Developer with an extensive background in Analytics, Digital Marketing, and Customer Service. On pace to earn a Full-Stack Web Development Certificate from Penn LPS and have developed skills in HTML5, CSS3, JavaScript, jQuery, command line, API consumption, MySQL, MongoDB and more. In my six years working in Analytics for a Philly-based Digital Marketing company I managed millions of dollars in ad spend, grew teams, and improved processes. With my new skills I’m looking to take on new challenges, build new things, and make meaningful, positive impacts on future projects.</p>
        </div>
    );
}

export default aboutMe;