import react from "react";
import { NavLink } from 'react-router-dom';

function header() {
    return (
        <header>
        <h1>Mike Pizzica</h1>
        {/* <img src={process.env.PUBLIC_URL + '/assets/images/MikePizzica1000x1000.jpg'} alt="mike pizzica" /> */}
        <nav>

            <NavLink to="/react-portfolio" className='text-NavLink' activeClassName="current" exact>
                <a>About</a>
            </NavLink>
            
            <NavLink to ="/react-portfolio/portfolio" className='text-NavLink' activeClassName="current" exact>
                <a>Portfolio</a>
            </NavLink>

            <NavLink to ="/react-portfolio/contact" className='text-NavLink' activeClassName="current" exact>
                <a>Contact</a>
            </NavLink>

            <NavLink to ="/react-portfolio/resume" className='text-NavLink' activeClassName="current" exact>
                <a>Resume</a>
            </NavLink>

        </nav>
    </header>
    );
}

export default header;