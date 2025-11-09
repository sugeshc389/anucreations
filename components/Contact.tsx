
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-forest-light focus:border-forest-light transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-forest-light focus:border-forest-light transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-forest-light focus:border-forest-light transition"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-forest hover:bg-forest-dark text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
