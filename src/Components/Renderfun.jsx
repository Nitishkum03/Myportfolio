import React from "react";

export default function Renderfun() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold">James Smith</h1>
        <nav className="flex text-2xl font-semibold space-x-4 mt-4 md:mt-0">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 py-10 bg-gray-100">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Frontend Developer</h2>
          <p className="mb-4 text-lg text-gray-600">
            I build clean, responsive, and interactive web interfaces.
          </p>
          <h3 className="text-2xl font-semibold">James Smith</h3>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="https://avatars.githubusercontent.com/u/184232923?s=400&u=30c66a0af8f688d6c59411d464d48207093939fd&v=4"
            alt="Profile"
            className="rounded-full mx-auto"
          />
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="text-gray-700">
          I am a frontend developer with a passion for building user-friendly and performant web
          applications. Skilled in HTML, CSS, JavaScript, and React.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {Array(3).fill().map((_, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project Screenshot"
                className="mb-4"
              />
              <h3 className="font-semibold">{i === 2 ? 'Blog Platform' : 'Project Name'}</h3>
              <p className="text-sm text-gray-600">React, Tailwind CSS</p>
              <div className="mt-2 space-x-2 text-sm text-blue-600">
                <a href="#">Live Demo</a>
                <a href="#">Code</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Git', 'Github'].map(skill => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-200 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <ul className="space-y-2 text-sm">
          <li>Email: <a className="text-blue-600" href="mailto:james.amith@example.com">james.amith@example.com</a></li>
          <li>LinkedIn: <a className="text-blue-600" href="#">LinkedIn</a></li>
          <li>GitHub: <a className="text-blue-600" href="#">GitHub</a></li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">© 2025 James Smith</footer>
    </div>
  );
}
