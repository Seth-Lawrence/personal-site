
import Navigation from './Navigation';
import Linkedin from './Linkedin';
import Github from './Github';

import '../styles/Signature.scss'
import '../styles/Navbar.scss'
import '../styles/App.scss';
import '../styles/RoutesList.scss';

import { Navbar } from 'reactstrap';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';

/**
 * props: none
 *
 * state: showHome, showProjects, showResume, isLoading
 *
 * App => Navigation, ProfilePicture, LeftNav, { Home, About, skills, projects}
 */

const App = () =>  {

  return (
    <div className='App'>

      {/* <Signature /> */}
      <Navbar className='Navbar'><Linkedin /> <Github /></Navbar>
      <BrowserRouter>
        <Navbar><Navigation /></Navbar>
        <div className='RoutesList'>
        <RoutesList />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
