import { useState } from 'react';
import { initialProjects } from './data/projects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const filteredProjects = projects.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      
      <main>
        <div className="controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ProjectForm onAddProject={handleAddProject} />
        </div>

        <section id="projects">
          <ProjectList projects={filteredProjects} />
        </section>
      </main>

      <Footer />
    </div>
  );
}