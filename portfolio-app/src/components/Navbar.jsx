function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Sienna<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#add-project">Add Project</a>
      </div>
    </nav>
  );
}

export default Navbar;