import Technology from "./Technology";
import Languages from "./Languages";

import '../styles/Skills.scss';
/**
 *   renders skills page
 *
 * props: none
 *
 * state: none
 *
 * App => Skills => { Languages, Technologies }
 */
function Skills() {

  return (
      <div className='Skills'>
          <Languages />
          <Technology />
      </div>
  )
}

export default Skills;