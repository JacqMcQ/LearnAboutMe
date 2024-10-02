import React from "react";

const Resume = () => {
  const proficiencies = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "PostgresSQL",
    "MongoDB",
  ];

  return (
    <section>
      <h2>Resume</h2>
      <a href="Coming Soon!" download>
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
