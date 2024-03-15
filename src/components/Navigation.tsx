import Linkedin from "./Linkedin";
import Github from "./Github";
import { Navbar, NavLink } from 'reactstrap';

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
  <Navbar>
    <Signature />
    <NavLink><Linkedin /></NavLink>
    <NavLink><Github  /></NavLink>
  </Navbar>
);

}

export default Navigation
