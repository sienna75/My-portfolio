import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'React application with Vite and custom styling.',
    tags: ['React', 'JavaScript', 'CSS']
  },
  {
    id: 2,
    title: 'Task Tracker',
    description: 'Interactive dashboard for tracking daily progress.',
    tags: ['React', 'State Management']
  }
];

export default function App() {
  const [projects] = useState(INITIAL_PROJECTS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container">
      <header>
        <h1>Portfolio Projects</h1>
      </header>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </main>
  );
}
