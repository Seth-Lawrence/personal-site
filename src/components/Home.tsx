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
    <div className='Home-container'>
      <div className='Home'>
        <h2>Hi, I'm Seth</h2>
        <h3>And I'm a Software Engineer</h3>
      </div>
      <div className='Home-description'>
        I look forward to making a significant and positive
        contribution to your organization
      </div>
    </div>
  );
}

export default Home;
