import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Travel Website",
      description: "A modern travel website designed for exploring new destinations.",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Restaurant App",
      description: "A clean restaurant application for browsing menus and discovering food.",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Photography Portfolio",
      description: "A visual portfolio created to showcase professional photography.",
      category: "Portfolio",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects((previousProjects) => [
      ...previousProjects,
      {
        ...newProject,
        id: Date.now(),
      },
    ]);
  }

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search)
    );
  });

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-label">MY WORK</p>
              <h2>Featured Projects</h2>
            </div>

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>

          <ProjectList projects={filteredProjects} />
        </section>

        <ProjectForm addProject={addProject} />
      </main>

      <Footer />
    </div>
  );
}

export default App;