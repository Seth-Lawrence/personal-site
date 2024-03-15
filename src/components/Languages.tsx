import {
  SiTypescript,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql
} from "react-icons/si";

import '../styles/Languages.scss';

/** renders language icons
 *
 * props: none
 *
 * state: none
 *
 * App => Skills => Languages
 */

function Languages() {
  return (
    <div className='Skills'>
      <div>
        Languages:
      </div>
      <div>
        <SiTypescript />
        <SiJavascript />
        <SiPython />
        <SiHtml5 />
        <SiCss3 />
        <SiPostgresql />
      </div>
    </div>
  );
}

export default Languages;
