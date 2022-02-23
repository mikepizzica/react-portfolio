import react from "react";
import { NavLink } from 'react-router-dom';

function header() {
    return (
        <header>
        <h1>Mike Pizzica</h1>
        <nav>

            <NavLink to="/" className='text-NavLink' activeClassName="current" exact>
                <a>About</a>
            </NavLink>
            
            <NavLink to ="/portfolio" className='text-NavLink' activeClassName="current" exact>
                <a>Portfolio</a>
            </NavLink>

            <NavLink to ="/contact" className='text-NavLink' activeClassName="current" exact>
                <a>Contact</a>
            </NavLink>

            <NavLink to ="/resume" className='text-NavLink' activeClassName="current" exact>
                <a>Resume</a>
            </NavLink>

        </nav>
    </header>
    );
}

export default header;