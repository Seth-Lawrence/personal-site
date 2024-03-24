import ProfilePicture from './ProfilePicture';

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

function Home() {

  return (
      <div className='Home'>
        <ProfilePicture />
        <h1>Hi, I'm Seth</h1>
        <h2>I'm a Software Engineer with a background in product</h2>
      </div>

  );
}

export default Home;
