import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  if (!projects.length) {
    return <p className="empty-message">No matching projects found.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}