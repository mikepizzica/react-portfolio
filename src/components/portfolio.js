import React from 'react';

function Portfolio() {
    return (
            <section id="portfolio">
                <h1>Portfolio</h1>
                <div class="project">
                    <img src={process.env.PUBLIC_URL + '/assets/images/card-graphix.png'} alt="card-graphix" class="project-images" />
                    <header class="project-info">
                        <a rel="noreferrer" href="https://card-graphix.web.app/" target="_blank" class="project-names">Card-Graphix</a><p>&nbsp;&nbsp;</p>
                        <a rel="noreferrer" href="https://github.com/IsaacJCarnes/card-graphix-firebase" target="_blank">
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
                        <a rel="noreferrer" href="https://mikepizzica.github.io/weather-dashboard/" target="_blank" class="project-names">Weather Info</a><p>&nbsp;&nbsp;</p>
                        <a rel="noreferrer" href="https://github.com/mikepizzica/weather-dashboard" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.png'} alt="github logo" class="github-logos" />
                        </a>
                    </header>
                </div>
            </section>
    );
}

export default Portfolio;