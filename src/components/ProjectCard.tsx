import '../styles/Button.scss';

interface ProjectCardProps {
  imagePath: string,
  imageDesc: string,
  projDesc: string;
  demo: string | null;
  git: string;
}


function ProjectCard(
  { imagePath, projDesc, imageDesc, git, demo = null }: ProjectCardProps
) {

  return (
    <div className='ProjectCard'>
      <div className='ProjectCard-img'>
        <img src={imagePath} alt={imageDesc}></img>
      </div>
      <div className='ProjectCard-desc'>
        {projDesc}
      </div>
      {demo && <a href={demo}><button className='Button'>Demo </button></a>}
      <a href={git}><button className='Button'>Github</button></a>
    </div>
  );
}
export default ProjectCard;
