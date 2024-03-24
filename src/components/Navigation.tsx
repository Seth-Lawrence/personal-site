import Linkedin from "./Linkedin";
import Github from "./Github";
import { NavLink, Link } from 'react-router-dom';

import Signature from "./Signature";

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
    <Signature />
    <Linkedin />
    <Github  />
    <NavLink to='/skills'>Skills</NavLink>
  </nav>
);

}

export default Navigation
