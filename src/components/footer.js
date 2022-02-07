import react from "react";

function Footer() {
    return (
        <div id="footer">
            <a rel="noreferrer" href="https://github.com/mikepizzica" target="_blank">
            <img src={process.env.PUBLIC_URL + '/assets/images/github-logo-white.png'} alt="white github logo" id="github-logo-white" />
            </a>

            <a rel="noreferrer" href="https://www.linkedin.com/in/mikepizzica/" target="_blank">
            <img src={process.env.PUBLIC_URL + '/assets/images/linkedin-logo-white.png'} alt="white linkedin logo" id="linkedin-logo-white" />
            </a>
        </div>
    );
}

export default Footer;