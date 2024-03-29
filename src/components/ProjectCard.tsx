import '../styles/Button.scss';
import '../styles/ProjectCard.scss';

interface ProjectCardProps {
  title: string,
  imagePath: string,
  imageDesc: string,
  projDesc: string;
  demo: string | null;
  git: string;
}


function ProjectCard(
  { title, imagePath, projDesc, imageDesc, git, demo = null }: ProjectCardProps
) {

  return (
    <div className='ProjectCard'>
      <div className='ProjectCard-title'>{title}</div>
      <div className='ProjectCard-img'>
        <img src={imagePath} alt={imageDesc}></img>
      </div>
      <div className='ProjectCard-desc'>
        {projDesc}
      </div>
      <div className='ProjectCard-btn'>
        {demo &&
          <button onClick={() => window.open(demo)}
            className='Button'>Demo</button>}
        <button onClick={() => window.open(git)}
          className='Button'>Github</button>
      </div>
    </div>
  );
}
export default ProjectCard;
