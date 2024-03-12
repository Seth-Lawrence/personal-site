import {
  SiJquery,
  SiReact,
  SiBootstrap,
  SiRender,
  SiJsonwebtokens,
  SiJasmine,
  SiJest,
  SiBabel,
  SiJinja,
  SiWebpack,
  SiGit,
  SiVisualstudiocode,
  SiInsomnia,
  SiFlask,
  SiJson
} from "react-icons/si";

import '../styles/Technology.scss';

/** renders technology icons
 *
 * props: none
 *
 * state: none
 *
 * App => Skills => Technology
 */

function Technology() {

  return (
    <div>
      <div>
        Technology:
      </div>
      <div>
        <SiJquery />
        <SiReact />
        <SiBootstrap />
        <SiRender />
        <SiJsonwebtokens />
        <SiJasmine />
        <SiJest />
        <SiBabel />
        <SiJinja />
        <SiWebpack />
        <SiGit />
        <SiVisualstudiocode />
        <SiInsomnia />
        <SiFlask />
        <SiJson />
      </div>
    </div>
  );
}

export default Technology;