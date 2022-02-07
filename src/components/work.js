import react from "react";
// import artistifyImg from '../images/artistify'
// mimic static site to start
// portfolio might be difficult - subcomponents and props.

function Work() {
    return (
        <article id="work">
            <section>
                <p id="work-text">Click on the text to view the github page<br/>Click on the image to view the deployed application</p>
                <div id="main-project">
                    <a rel="noreferrer" href="https://github.com/mikepizzica/Penn-Collab-Project-2-Artistify" target="_blank">
                    <header>Artistify</header>
                    </a>
                    <a rel="noreferrer" href="https://artistify-project.herokuapp.com/" target="_blank">
                    <img src={process.env.PUBLIC_URL + '/assets/images/artistify.jpg'} alt="artistify" />
                    </a>
                </div>
                <div class="project">
                    <a rel="noreferrer" href="https://github.com/mikepizzica/password-generator" target="_blank">
                    <header>Password Generator</header>
                    </a>
                    <a rel="noreferrer" href="https://mikepizzica.github.io/password-generator/" target="_blank">
                    <img src={process.env.PUBLIC_URL + '/assets/images/password-generator.jpg'} alt="password generator" />
                    </a>
                </div>
                <div class="project">
                    <a rel="noreferrer" href="https://github.com/mikepizzica/weather-dashboard" target="_blank">
                    <header>Weather Dashboard</header>
                    </a>
                    <a rel="noreferrer" href="https://mikepizzica.github.io/weather-dashboard/" target="_blank">
                    <img src={process.env.PUBLIC_URL + '/assets/images/weather-dashboard-small.jpg'} alt="weather dashboard"/>
                    </a>
                </div>
                <div class="project">
                    <a rel="noreferrer" href="https://github.com/mikepizzica/note-taker" target="_blank">
                    <header>Note Taker</header>
                    </a>
                    <a rel="noreferrer" href="https://nameless-ravine-92026.herokuapp.com/notes" target="_blank">
                    <img src={process.env.PUBLIC_URL + '/assets/images/note-taker.jpg'} alt="note taker"/>
                    </a>
                </div>
                <div class="project">
                    <a rel="noreferrer" href="https://github.com/mikepizzica/tech-blog" target="_blank">
                    <header>Tech Blog</header>
                    </a>
                    <a rel="noreferrer" href="https://tech-blog-mike-pizzica.herokuapp.com/" target="_blank">
                    <img src={process.env.PUBLIC_URL + '/assets/images/tech-blog.jpg'} alt="tech blog" />
                    </a>
                </div>
            </section>
        </article>
    );
}

export default Work;