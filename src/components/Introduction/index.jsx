import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro-card">

        <h2>👋 Hello, I'm Nishant Kumar</h2>
        <p className="intro-subtitle">
          Senior React.js Frontend Developer | 7+ Years Experience
        </p>

        {/* About */}
        <div className="intro-section">
          <h3>🎯 About Me</h3>

          <p>
            Hello, I'm Nishant Kumar, a Senior React.js Frontend Developer with
            over 7 years of experience building scalable enterprise web
            applications using React.js, Next.js, TypeScript, JavaScript,
            Redux Toolkit, and Micro Frontend Architecture.
          </p>

          <p>
            Currently, I'm working at <strong>Persistent Systems</strong> for
            the <strong>Wells Fargo</strong> project, where I develop enterprise
            onboarding and document management applications. My responsibilities
            include building reusable UI components, dynamic forms, document
            upload workflows, REST API integration, performance optimization,
            and migrating legacy applications to a modern design system.
          </p>

          <p>
            Previously, I worked with Apexon, Reward360 (HDFC MyCards),
            Capgemini, doodleblue Innovations, and Cod4Solutions. During my
            career, I have delivered enterprise applications across banking,
            fintech, airline, e-commerce, and document management domains.
          </p>

          <p>
            I have hands-on experience with React.js, Next.js, TypeScript,
            JavaScript, Redux Toolkit, RTK Query, HTML5, CSS3, Tailwind CSS,
            Material UI, REST APIs, Micro Frontend Architecture, Jest, React
            Testing Library, CI/CD, Docker, AWS, Git, and AI-assisted
            development using GitHub Copilot, ChatGPT, OpenAI Codex, and Claude.
          </p>

          <p>
            I enjoy building clean, reusable, and high-performance applications,
            mentoring team members, solving complex business problems, and
            continuously learning new technologies.
          </p>
        </div>

        {/* Skills */}
        <div className="intro-section">
          <h3>💼 Technical Skills</h3>

          <div className="skills-grid">

            <div className="skill-item">
              <span className="skill-icon">⚛️</span>
              <span className="skill-name">React.js</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">▲</span>
              <span className="skill-name">Next.js</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">📘</span>
              <span className="skill-name">TypeScript</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">📜</span>
              <span className="skill-name">JavaScript</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🛠</span>
              <span className="skill-name">Redux Toolkit</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🏗</span>
              <span className="skill-name">Micro Frontend</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🎨</span>
              <span className="skill-name">Tailwind CSS</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🎭</span>
              <span className="skill-name">Material UI</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🔗</span>
              <span className="skill-name">REST APIs</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🧪</span>
              <span className="skill-name">Jest</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">✅</span>
              <span className="skill-name">React Testing Library</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">☁️</span>
              <span className="skill-name">AWS</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🐳</span>
              <span className="skill-name">Docker</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🚀</span>
              <span className="skill-name">CI/CD</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🤖</span>
              <span className="skill-name">GitHub Copilot</span>
            </div>

            <div className="skill-item">
              <span className="skill-icon">💬</span>
              <span className="skill-name">ChatGPT</span>
            </div>

          </div>
        </div>

        {/* Experience */}
        <div className="intro-section">
          <h3>💼 Professional Experience</h3>

          <div className="experience-item">
            <h4>Senior Software Engineer Team Lead</h4>
            <p className="experience-date">
              Persistent Systems | Jul 2025 – Present
            </p>
            <p>
              Working on the Wells Fargo Enterprise Onboarding Platform using
              React.js, TypeScript, Micro Frontend Architecture, REST APIs,
              reusable components, document upload workflows, performance
              optimization, and Pioneer Design System migration.
            </p>
          </div>

          <div className="experience-item">
            <h4>Software Engineer II</h4>
            <p className="experience-date">
              Apexon (Builder.ai) | Aug 2024 – Jun 2025
            </p>
            <p>
              Developed scalable React.js and Next.js applications, reusable UI
              components, API integration, and production issue resolution.
            </p>
          </div>

          <div className="experience-item">
            <h4>React Developer</h4>
            <p className="experience-date">
              Reward360 (HDFC MyCards) | Sep 2022 – Feb 2024
            </p>
            <p>
              Developed banking modules including dashboards, authentication,
              rewards, transactions, and REST API integrations.
            </p>
          </div>

          <div className="experience-item">
            <h4>Software Engineer</h4>
            <p className="experience-date">
              Capgemini | Nov 2021 – Aug 2022
            </p>
            <p>
              Provided L3 production support, incident management, SQL
              validation, and root cause analysis.
            </p>
          </div>

          <div className="experience-item">
            <h4>Software Engineer</h4>
            <p className="experience-date">
              doodleblue Innovations | Jul 2021 – Sep 2021
            </p>
            <p>
              Built React dashboards with Chart.js and REST API integration.
            </p>
          </div>

          <div className="experience-item">
            <h4>Software Developer</h4>
            <p className="experience-date">
              Cod4Solutions | Jan 2018 – Dec 2020
            </p>
            <p>
              Developed airline reservation applications using React.js, Redux,
              and REST APIs.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="intro-section">
          <h3>🚀 Key Projects</h3>

          <ul className="highlights-list">
            <li>🏦 Wells Fargo Enterprise Onboarding Platform</li>
            <li>📱 Builder.ai Booking Platform</li>
            <li>💳 HDFC MyCards Banking Portal</li>
            <li>🎨 Asian Paints Sales Dashboard</li>
            <li>✈️ Airline Reservation System</li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="intro-section">
          <h3>🌟 Career Highlights</h3>

          <ul className="highlights-list">
            <li>✅ 7+ Years of Professional Experience</li>
            <li>✅ Expertise in Enterprise React.js Applications</li>
            <li>✅ Strong Experience in Micro Frontend Architecture</li>
            <li>✅ Built Reusable Component Libraries</li>
            <li>✅ Performance Optimization using Lazy Loading & Memoization</li>
            <li>✅ REST API Integration & State Management</li>
            <li>✅ Unit Testing with Jest & React Testing Library</li>
            <li>✅ CI/CD, Docker & AWS Experience</li>
            <li>✅ AI-assisted Development using GitHub Copilot & ChatGPT</li>
            <li>✅ Agile & Scrum Development Experience</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default React.memo(Introduction);