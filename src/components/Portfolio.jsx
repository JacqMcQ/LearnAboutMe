import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "TXT-ED",
      image: "./images/TXT-ED.jpg",
      link: "https://txt-ed.onrender.com/",
      repo: "https://github.com/JacqMcQ/TXT-ED",
    },
    {
      title: "Chit-Chat",
      image: "./public/images/Chit-Chat.jpg",
      link: "https://drive.google.com/file/d/1zWs4DeC9kLolT09siZRR4e_qzYpAmVy2/view?usp=sharing",
      repo: "https://github.com/JacqMcQ/Chit-Chat",
    },
    {
      title: "U-Post",
      image: "./images/U-Post.png",
      link: "https://u-post-duhp.onrender.com/login",
      repo: "https://github.com/JacqMcQ/U-Post",
    },
    {
      title: "Reader-Reply",
      image: "./images/Reader-Reply.png",
      link: "https://reader-reply.onrender.com/",
      repo: "https://github.com/JacqMcQ/Reader-Reply",
    },
    {
      title: "Foodie By JAD",
      image: "./images/JAD.png",
      link: "https://tuffythejeep.github.io/Project-JAD/",
      repo: "https://github.com/tuffythejeep/Project-JAD",
    },
    {
      title: "Employee Payroll Tracker",
      video: "./videos/CommerceNestDB-Demo.mp4",
      link: "See Video demo for command-line app",
      repo: "https://github.com/JacqMcQ/Employee-Payroll-Tracker?tab=readme-ov-file",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            {project.video ? (
              <video controls width="600">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={project.image} alt={project.title} />
            )}
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>{" "}
              |{" "}
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;