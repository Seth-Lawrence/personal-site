import { SiTypescript,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql } from "react-icons/si";

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
    <div>
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
