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
      {demo && <button onClick={() => window.open(demo)} className='Button'>Demo </button>}
      <a href={git}><button className='Button'>Github</button></a>
    </div>
  );
}
export default ProjectCard;
