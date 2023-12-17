import './App.css';
import projectCardData from './projectCardData.js';


function Projects() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
        <h1>Projects</h1>
        <ul>
            {projectCardData.map((goose, index) => (
                <li key={index} onClick={() => handleClick(goose.projectURL)}>
                    <h3>{goose.projectName}</h3>
                    <img src={goose.imageURL} alt={goose.projectName} />
                </li>
            ))}
        </ul>
    </div>
);
}
export default Projects;


