
import Navigation from './Navigation';
import Signature from './Signature';
import Linkedin from './Linkedin';
import Github from './Github';

import '../styles/Signature.scss'
import '../styles/Navbar.scss'
import '../styles/App.scss';

import { Navbar } from 'reactstrap';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';

/**
 * props: none
 *
 * state: showHome, showProjects, showResume, isLoading
 *
 * App => Navigation, ProfilePicture, LeftNav, { Home, About, skills, projects }
 */

function App() {

  return (
    <div className='App'>

      {/* <Signature /> */}
      <Navbar className='Navbar'><Linkedin /> <Github /></Navbar>
      <BrowserRouter>
        <Navbar><Navigation /></Navbar>
        <RoutesList />
      </BrowserRouter>
    </div>
  )
}

export default App;
