
import '../styles/App.css';
import { useState } from 'react';

/**
 *
 * props: none
 *
 * state: showHome, showProjects, showResume, isLoading
 *
 * App => Navigation, ProfilePicture, LeftNav { Home, About, skillb
 * jects }
 */

function App() {

  const [showHome, setShowHome] = useState<Boolean>(true);
  const [showProjects, setShowProjects] = useState<Boolean>(false);
  const [showAbout, setShowAbout] = useState<Boolean>(false);
  const [showResume, setShowResume] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  function handleClick(section: 'about' | 'skills' | 'pojects' | 'home'): void {
    setIsLoading(true);
    (showHome && setShowHome(false));
    (showAbout && setShowAbout(false));
    (showResume && setShowResume(false));
    (showProjects && setShowProjects(false));

    //the case conditions need to match button text
    switch (section.toLowerCase()) {
      case 'about':
        setShowAbout(true);
        break;
      case 'skills':
        setShowResume(true);
        break;
      case 'projects':
        setShowProjects(true);
        break;
      case 'home':
        setShowHome(true);
        break;
      default:
        setShowHome(true);
    }

    setIsLoading(false);
  }

  return (
    <section className='App'>
      <aside>
        <Navigation redirect={redirect} />
        <ProfilePicture />
        <LeftNav handleClick={handleClick} />
      </aside>
      <section>
        {
          (showHome && <Home />)
          || (showAbout && <About />)
          || (showResume && <Skills />)
          || (showProjects && <Projects />)
        }
      </section>
    </section>
  );
}

export default App;
