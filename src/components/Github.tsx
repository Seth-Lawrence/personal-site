import {FaGithub} from 'react-icons/fa';

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
    <a onClick={() => window.open('http://github.com/seth-lawrence')}>
      <FaGithub />
    </a>
  );
}

export default Github
