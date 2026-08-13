import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="no-results">No projects found.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}