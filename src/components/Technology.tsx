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
      <i className="devicon-jquery-plain-wordmark colored"></i>
      <i className="devicon-react-original-wordmark colored"></i>
      <i className="devicon-bootstrap-plain-wordmark colored"></i>
        <i className="devicon-jasmine-original-wordmark colored"></i>
        <i className="devicon-jest-plain colored"></i>
        <i className="devicon-babel-plain colored"></i>
        <i className="devicon-jira-plain-wordmark colored"></i>
        <i className="devicon-webpack-plain-wordmark colored"></i>
        <i className="devicon-git-plain-wordmark colored"></i>
        <i className="devicon-github-original-wordmark"></i>
        <i className="devicon-flask-original-wordmark colored"></i>
        <i className="devicon-json-plain colored"></i>
        <i className="devicon-insomnia-plain-wordmark colored"></i>
        <i className="devicon-vscode-plain-wordmark colored"></i>
        <SiRender />
        <SiJsonwebtokens />
        <SiJinja />
      </div>
    </div>
  );
}

export default Technology;