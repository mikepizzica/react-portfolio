import react from "react";
import Nav from './nav';

function header() {
    return (
        <header>
        <h1>Mike Pizzica</h1>
        <img src={process.env.PUBLIC_URL + '/assets/images/MikePizzica1000x1000.jpg'} alt="mike pizzica" />
        <nav>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#work">Work</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </nav>
    </header>
    );
}

export default header;