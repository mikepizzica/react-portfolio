import React from 'react';

function aboutMe() {
    return (
        <section id="about-me">
            <h1>About me</h1>
            <img src={process.env.PUBLIC_URL + '/assets/images/MikePizzica1000x1000.jpg'} alt="mike pizzica" id="headshot" />
            <p>Full-Stack Web Developer with extensive experience in Analytics, Digital Marketing, and Customer Support. Earned a Full-Stack Web Development Certificate from Penn LPS and have developed skills in HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars, and React. In my 7+ years of experience I've managed millions of dollars in ad spend, grown teams, and improved processes. I've also provided key insights for product, customer success, and sales teams using data models and BI tools.</p>
        </section>
    );
}

export default aboutMe;