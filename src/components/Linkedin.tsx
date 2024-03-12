import { FaLinkedin } from "react-icons/fa";

/**
 * renders Linkedin icon
 *
 * props: none
 *
 * state: none
 *
 * App => Navigation => Linkedin
 */

function Linkedin() {

  return (
    <a onClick={() => window.open('http://www.linkedin.com/in/lawrencehobson')}>
      <FaLinkedin />
    </a>
  );
}

export default Linkedin;
