import {FaGithub} from 'react-icons/fa';
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
    <a onClick={() => window.open('http://github.com/seth-lawrence')}>
      <FaGithub />
    </a>
  );
}

export default Github
