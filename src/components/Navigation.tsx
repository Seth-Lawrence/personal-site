
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.scss';

/**
 * renders heading navigation bar
 *
 * props: none
 *
 * state: none
 *
 * App => Navigation => { LinkedIn, Github }
 */

function Navigation() {

  return (
  <nav className='Navigation'>
    <NavLink to='/skills'>Skills</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/home'>Home</NavLink>
  </nav>
);

}

export default Navigation;
