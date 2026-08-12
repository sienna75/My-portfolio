import { useState } from "react";

function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.image
    ) {
      alert("Please fill in all fields.");
      return;
    }

    addProject(formData);

    setFormData({
      title: "",
      description: "",
      category: "",
      image: "",
    });
  }

  return (
    <section className="form-section" id="add-project">
      <div className="form-heading">
        <p className="section-label">ADD TO MY WORK</p>

        <h2>Add a New Project</h2>

        <p>
          Have a new project? Add it to the portfolio using the
          form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="project-form">
        <div className="form-group">
          <label htmlFor="title">Project Title</label>

          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. E-commerce Website"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>

          <input
            id="category"
            name="category"
            type="text"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Web App"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="image">Image URL</label>

          <input
            id="image"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="description">Description</label>

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project..."
            rows="5"
          />
        </div>

        <button type="submit" className="submit-button">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;