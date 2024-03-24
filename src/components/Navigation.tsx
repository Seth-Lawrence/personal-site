
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
    <NavLink to='/Projects'>Projects</NavLink>
    <NavLink to='/About'>About</NavLink>
    <NavLink to='/Home'>Home</NavLink>
  </nav>
);

}

export default Navigation
