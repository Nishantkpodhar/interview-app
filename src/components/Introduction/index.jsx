import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro-card">
        <h2>👋 Hello, my name is Nishant Kumar</h2>
        <p className="intro-subtitle">Senior Frontend Developer | React.js | TypeScript | Next.js | Redux Toolkit</p>

        <div className="intro-section">
          <h3>🎯 About Me</h3>
          <p>
            Hello, my name is Nishant Kumar. I am a Senior Frontend Developer with over 7 years of experience in web application development.
            I specialize in React.js, TypeScript, JavaScript, Next.js, and Redux Toolkit.
          </p>
          <p>
            Currently, I am working at Persistent Systems for the Wells Fargo client, where I develop enterprise-level onboarding and document management applications using Micro Frontend Architecture.
            My responsibilities include building reusable UI components, integrating APIs, optimizing application performance, and collaborating with cross-functional teams.
          </p>
          <p>
            Previously, I worked with Apexon, Reward360, Capgemini, Doodleblue, and Cod4Solutions, where I gained experience in banking, airline, e-commerce, and enterprise applications.
          </p>
          <p>
            I have strong knowledge of React.js, TypeScript, Redux, REST APIs, Jest, React Testing Library, Node.js, and Agile methodologies.
            I am passionate about building scalable and high-performance applications and continuously improving my skills using modern technologies and AI-assisted development tools like GitHub Copilot and ChatGPT.
          </p>
          <p>
            I am currently looking for opportunities where I can contribute my frontend expertise, solve complex business problems, and continue growing as a software engineer.
          </p>
        </div>

        <div className="intro-section">
          <h3>💼 Skills</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-icon">⚛️</span>
              <span className="skill-name">React</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">📜</span>
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🎨</span>
              <span className="skill-name">CSS3</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🗄️</span>
              <span className="skill-name">Node.js</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">📦</span>
              <span className="skill-name">MongoDB</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🔧</span>
              <span className="skill-name">Express</span>
            </div>
          </div>
        </div>

        <div className="intro-section">
          <h3>🎓 Experience</h3>
          <div className="experience-item">
            <h4>Senior Frontend Developer</h4>
            <p className="experience-date">2023 - Present</p>
            <p>Building responsive and interactive web applications using React and modern JavaScript.</p>
          </div>
          <div className="experience-item">
            <h4>Full Stack Developer</h4>
            <p className="experience-date">2021 - 2023</p>
            <p>Developed full-stack applications with React and Node.js, improving performance by 40%.</p>
          </div>
        </div>

        <div className="intro-section">
          <h3>🌟 Highlights</h3>
          <ul className="highlights-list">
            <li>Built 15+ production-ready applications</li>
            <li>Mentored 5+ junior developers</li>
            <li>Improved app performance by 40% through optimization</li>
            <li>Contributed to open-source projects</li>
            <li>Expertise in state management and component architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Introduction);
