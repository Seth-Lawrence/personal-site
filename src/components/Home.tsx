import ProfilePicture from './ProfilePicture';
// import RecentProjects from './RecentProjects';


import '../styles/Home.scss';
import Skills from './Skills';

/**
 * renders home page
 *
 * props: none
 *
 * state: none
 *
 * App => Home
 */

const Home = () => {

  return (
      <div className='Home'>
        <ProfilePicture />
        <h1>Hi, I'm Seth</h1>
        <h2>I'm a Software Developer with a background in Analytics </h2>
        <Skills />
        
      </div>

  );
}

export default Home;
