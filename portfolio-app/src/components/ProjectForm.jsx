import { useState } from 'react';

export default function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    imageUrl: '',
    link: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category) return;

    onAddProject({
      ...formData,
      id: Date.now().toString(),
      imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop'
    });

    setFormData({ title: '', category: '', description: '', imageUrl: '', link: '' });
  };

  return (
    <form className="project-form" id="add-project" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      
      <input
        name="title"
        placeholder="Project title *"
        value={formData.title}
        onChange={handleChange}
        required
      />
      
      <input
        name="category"
        placeholder="Category *"
        value={formData.category}
        onChange={handleChange}
        required
      />
      
      <input
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
      />
      
      <input
        name="link"
        placeholder="Project URL"
        value={formData.link}
        onChange={handleChange}
      />
      
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows="3"
      />

      <button type="submit">Submit</button>
    </form>
  );
}