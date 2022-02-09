import react from "react";
import { Link } from 'react-router-dom';

function header() {
    return (
        <header>
        <h1>Mike Pizzica</h1>
        {/* <img src={process.env.PUBLIC_URL + '/assets/images/MikePizzica1000x1000.jpg'} alt="mike pizzica" /> */}
        <nav>

            <Link to="/react-portfolio/" className='text-link'>
                <a>About</a>
            </Link>
            
            <Link to ="/react-portfolio/portfolio" className='text-link'>
                <a>Portfolio</a>
            </Link>

            <Link to ="/react-portfolio/contact" className='text-link'>
                <a>Contact</a>
            </Link>

            <Link to ="/react-portfolio/resume" className='text-link'>
                <a>Resume</a>
            </Link>

        </nav>
    </header>
    );
}

export default header;