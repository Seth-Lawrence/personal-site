import '../styles/Github.scss';


/**
 * renders github icon
 *
 * props: none
 *
 * state: none
 *
 * App => Navigation => Github
 */

function Github() {

  return (
    <div>
      <a className='Github' onClick={() => window.open('http://github.com/seth-lawrence')}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
      </a>
    </div>
  );
}

export default Github;
