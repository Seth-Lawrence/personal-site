
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
      <Signature />
      <Navbar className='Navbar'><Linkedin /> <Github /></Navbar>
      <BrowserRouter>
        <Navbar><Navigation /></Navbar>
        <RoutesList />
      </BrowserRouter>
    </div>
  )
}

export default App;

//   const [showHome, setShowHome] = useState<Boolean>(true);
//   const [showProjects, setShowProjects] = useState<Boolean>(false);
//   const [showAbout, setShowAbout] = useState<Boolean>(false);
//   const [showResume, setShowResume] = useState<Boolean>(false);
//   const [isLoading, setIsLoading] = useState<Boolean>(false);


//   /**
//    * determines whether about, skills, projects, or home is displayed.
//    */
//   function handleClick(section: 'about' | 'skills' | 'pojects' | 'home'): void {
//     setIsLoading(true);
//     (showHome && setShowHome(false));
//     (showAbout && setShowAbout(false));
//     (showResume && setShowResume(false));
//     (showProjects && setShowProjects(false));

//     //the case conditions need to match button text
//     switch (section.toLowerCase()) {
//       case 'about':
//         setShowAbout(true);
//         break;
//       case 'skills':
//         setShowResume(true);
//         break;
//       case 'projects':
//         setShowProjects(true);
//         break;
//       case 'home':
//         setShowHome(true);
//         break;
//       default:
//         setShowHome(true);
//     }

//     setIsLoading(false);
//   }
//   //TODO: add browser router
//   return (
//     <section>
//       <Navbar className='Navigation'>
//         <Navigation />
//       </Navbar>
//       {/* <aside>
//         <LeftNav handleClick={handleClick} />
//       </aside> */}
//       <section>
//         {
//           (showHome && <Home />)
//           || (showAbout && <About />)
//           || (showResume && <Skills />)
//           || (showProjects && <Projects />)
//         }
//       </section>
//     </section>
//   );
// }

// export default App;
