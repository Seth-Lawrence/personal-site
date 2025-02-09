import ProfilePicture from './ProfilePicture';
// import RecentProjects from './RecentProjects';


import '../styles/Home.scss';

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
        <h2>I'm a Software Developer with a background in Product Analytics </h2>
        {/* <RecentProjects /> */}
      </div>

  );
}

export default Home;
