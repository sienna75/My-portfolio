export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <div className="card-body">
        <span className="tag">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer">
            View Project
          </a>
        )}
      </div>
    </div>
  );
}