import react from "react";
// import artistifyImg from '../images/artistify'
// mimic static site to start
// portfolio might be difficult - subcomponents and props.

function Work() {
    return (
        <article id="work">
            <section id="portfolio">
                <div class="project">
                    <img src={process.env.PUBLIC_URL + '/assets/images/artistify.png'} alt="artistify" class="project-images" />
                    <header class="project-info">
                        <a rel="noreferrer" href="https://artistify-project.herokuapp.com/" target="_blank" class="project-names">Artistify</a><p>&nbsp;&nbsp;</p>
                        <a rel="noreferrer" href="https://github.com/mikepizzica/artistify" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.png'} alt="github logo" class="github-logos" />
                        </a>
                    </header>
                </div>
                <div class="project">
                    <img src={process.env.PUBLIC_URL + '/assets/images/password-generator.png'} alt="password generator" class="project-images" />
                    <header class="project-info">
                        <a rel="noreferrer" href="https://mikepizzica.github.io/password-generator/" target="_blank" class="project-names">PW Generator</a><p>&nbsp;&nbsp;</p>
                        <a rel="noreferrer" href="https://github.com/mikepizzica/password-generator" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.png'} alt="github logo" class="github-logos" />
                        </a>
                    </header>
                </div>
                <div class="project">
                    <img src={process.env.PUBLIC_URL + '/assets/images/weather-dashboard.png'} alt="weather dashboard" class="project-images"/>
                    <header class="project-info">
                        <a rel="noreferrer" href="https://mikepizzica.github.io/weather-dashboard/" target="_blank" class="project-names">Weather Dashboard</a><p>&nbsp;&nbsp;</p>
                        <a rel="noreferrer" href="https://github.com/mikepizzica/weather-dashboard" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.png'} alt="github logo" class="github-logos" />
                        </a>
                    </header>
                </div>
                <div class="project">
                    <img src={process.env.PUBLIC_URL + '/assets/images/note-taker.png'} alt="note taker" class="project-images"/>
                    <header class="project-info">
                        <a rel="noreferrer" href="https://nameless-ravine-92026.herokuapp.com/" target="_blank" class="project-names">Note Taker</a><p>&nbsp;&nbsp;</p>
                        <a rel="noreferrer" href="https://github.com/mikepizzica/note-taker" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.png'} alt="github logo" class="github-logos" />
                        </a>
                    </header>
                </div>
                <div class="project">
                    <img src={process.env.PUBLIC_URL + '/assets/images/tech-blog.png'} alt="tech blog" class="project-images"/>
                    <header class="project-info">
                        <a rel="noreferrer" href="https://tech-blog-mike-pizzica.herokuapp.com/" target="_blank" class="project-names">Tech Blog</a><p>&nbsp;&nbsp;</p>
                        <a rel="noreferrer" href="https://github.com/mikepizzica/tech-blog" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.png'} alt="github logo" class="github-logos" />
                        </a>
                    </header>
                </div>
            </section>
        </article>
    );
}

export default Work;