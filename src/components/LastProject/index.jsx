import React from "react";
import "./LastProject.css";

function LastProject() {
  return (
    <div className="project-container">
      <div className="project-card">

        <div className="project-header">
          <h2>🏦 Wells Fargo Enterprise Onboarding Platform</h2>
          <span className="project-badge">Current Project</span>
        </div>

        {/* Project Overview */}
        <div className="project-section">
          <h3>📝 Project Overview</h3>

          <p>
            The Enterprise Onboarding Platform is an internal banking application
            developed for Wells Fargo to simplify and automate customer
            onboarding and document management processes.
          </p>

          <p>
            The application enables relationship managers and operations teams
            to onboard customers, upload and verify KYC documents, manage
            document workflows, and track onboarding status through a secure,
            scalable, and user-friendly interface.
          </p>

          <p>
            The application is developed using React.js, TypeScript, Redux
            Toolkit, REST APIs, and Micro Frontend Architecture, allowing
            multiple teams to independently develop and deploy different
            business modules.
          </p>
        </div>

        {/* Business Flow */}
        <div className="project-section">
          <h3>🔄 Complete Business Flow</h3>

          <div className="features-list">

            <div className="feature-card">
              <span className="feature-icon">👤</span>
              <h4>Customer Search</h4>
              <p>
                Search existing customers using Customer ID, Business Name,
                Account Number, or Tax ID.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">📝</span>
              <h4>Create Onboarding</h4>
              <p>
                Relationship managers create new onboarding requests by filling
                customer and business information.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">📂</span>
              <h4>Document Upload</h4>
              <p>
                Upload multiple KYC and business documents with validation,
                preview, delete, replace, and progress tracking.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✔️</span>
              <h4>Verification</h4>
              <p>
                Documents are validated and verified before moving to the
                approval workflow.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">📋</span>
              <h4>Approval Workflow</h4>
              <p>
                Business users review applications, approve or reject requests,
                and provide comments.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🎉</span>
              <h4>Customer Onboarded</h4>
              <p>
                Once approved, the customer onboarding process is completed and
                the application status is updated.
              </p>
            </div>

          </div>
        </div>

        {/* My Responsibilities */}
        <div className="project-section">
          <h3>💼 My Responsibilities</h3>

          <ul className="highlights-list">
            <li>Developed enterprise React.js applications using TypeScript.</li>
            <li>Built reusable UI components for multiple business modules.</li>
            <li>Developed dynamic onboarding forms.</li>
            <li>Implemented reusable document upload components.</li>
            <li>Integrated multiple REST APIs using Axios.</li>
            <li>Managed application state using Redux Toolkit and RTK Query.</li>
            <li>Implemented lazy loading and code splitting.</li>
            <li>Optimized rendering using React.memo, useMemo, and useCallback.</li>
            <li>Migrated legacy RIA-3 components to Pioneer Design System.</li>
            <li>Wrote unit tests using Jest and React Testing Library.</li>
            <li>Participated in code reviews and Agile sprint ceremonies.</li>
            <li>Worked closely with backend developers, QA, and business teams.</li>
        </ul>
        </div>

        {/* Technology Stack */}
        <div className="project-section">
          <h3>🛠️ Technology Stack</h3>

          <div className="tech-stack">

            <div className="tech-item">
              <span>React.js</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>TypeScript</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>Redux Toolkit</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>RTK Query</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>REST APIs</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>Micro Frontend</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>Jest</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>React Testing Library</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Project Modules */}
        <div className="project-section">
          <h3>📦 Project Modules</h3>

          <div className="metrics-grid">

            <div className="metric-card">
              <h4>Dashboard</h4>
              <p>Customer Overview</p>
            </div>

            <div className="metric-card">
              <h4>Onboarding</h4>
              <p>Dynamic Forms</p>
            </div>

            <div className="metric-card">
              <h4>Documents</h4>
              <p>Multi Upload</p>
            </div>

            <div className="metric-card">
              <h4>Approval</h4>
              <p>Workflow Management</p>
            </div>

            <div className="metric-card">
              <h4>Notifications</h4>
              <p>Status Updates</p>
            </div>

            <div className="metric-card">
              <h4>Reports</h4>
              <p>Tracking & Audit</p>
            </div>

          </div>
        </div>

        {/* Challenges */}
        <div className="project-section">
          <h3>🚀 Challenges & Solutions</h3>

          <ul className="highlights-list">
            <li>Built reusable components to reduce duplicate code.</li>
            <li>Optimized application performance using lazy loading and memoization.</li>
            <li>Integrated multiple backend REST APIs efficiently.</li>
            <li>Handled large document uploads with validation and error handling.</li>
            <li>Migrated legacy UI components to the Pioneer Design System.</li>
            <li>Improved application maintainability using Micro Frontend Architecture.</li>
        </ul>
        </div>

        {/* Highlights */}
        <div className="project-section">
          <h3>🌟 Project Highlights</h3>

          <ul className="highlights-list">
            <li>Enterprise Banking Application</li>
            <li>Micro Frontend Architecture</li>
            <li>Reusable Component Library</li>
            <li>Dynamic Form Builder</li>
            <li>Multi Document Upload Workflow</li>
            <li>REST API Integration</li>
            <li>Redux Toolkit & RTK Query</li>
            <li>Performance Optimization</li>
            <li>Jest & React Testing Library</li>
            <li>CI/CD, Docker & AWS</li>
            <li>Agile Scrum Development</li>
            <li>Migration to Pioneer Design System</li>
          </ul>
        </div>

      </div>
       <div className="project-card">

        <div className="project-header">
          <h2>💳 HDFC MyCards Portal</h2>
          <span className="project-badge">Reward360 Project</span>
        </div>

        {/* Project Overview */}

        <div className="project-section">
          <h3>📝 Project Overview</h3>

          <p>
            HDFC MyCards is a digital banking platform that allows customers to
            manage their Credit Cards, Debit Cards and card-related services from
            a single web application.
          </p>

          <p>
            The portal provides features like card summary, transaction history,
            reward points, statement download, authentication, profile management,
            card controls and multiple banking services through a secure user
            experience.
          </p>

          <p>
            I worked as a React Developer at Reward360 where I developed multiple
            enterprise banking modules using React.js, Next.js, Redux Toolkit,
            REST APIs and reusable UI components while collaborating with backend,
            QA and business teams.
          </p>

        </div>

        {/* Complete Business Flow */}

        <div className="project-section">
          <h3>🔄 Complete Business Flow</h3>

          <div className="features-list">

            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h4>Login</h4>
              <p>
                Customer enters registered mobile number and verifies using OTP
                authentication.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🏠</span>
              <h4>Dashboard</h4>
              <p>
                Displays credit limit, outstanding balance, due date,
                reward points and recent activities.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">💳</span>
              <h4>Card Management</h4>
              <p>
                View card details, enable or disable online transactions,
                manage limits and control card usage.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h4>Transactions</h4>
              <p>
                View recent transactions, filter records,
                download statements and check payment history.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🎁</span>
              <h4>Reward Points</h4>
              <p>
                View accumulated reward points,
                eligible rewards and redemption options.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">⚙️</span>
              <h4>Profile Management</h4>
              <p>
                Update profile, contact details,
                communication preferences and card settings.
              </p>
            </div>

          </div>

        </div>

        {/* Modules */}

        <div className="project-section">
          <h3>📦 Modules I Worked On</h3>

          <ul className="highlights-list">

            <li>Customer Dashboard</li>
            <li>Authentication (OTP Login)</li>
            <li>Credit Card Summary</li>
            <li>Transaction History</li>
            <li>Reward Points Module</li>
            <li>Statement Download</li>
            <li>Card Management</li>
            <li>Profile Management</li>
            <li>REST API Integration</li>

          </ul>
        </div>

        {/* Responsibilities */}

        <div className="project-section">
          <h3>💼 My Responsibilities</h3>

          <ul className="highlights-list">

            <li>Developed reusable React.js components.</li>

            <li>
              Built responsive banking screens using React.js and Next.js.
            </li>

            <li>
              Managed application state using Redux Toolkit.
            </li>

            <li>
              Integrated multiple REST APIs using Axios.
            </li>

            <li>
              Developed reward points and transaction modules.
            </li>

            <li>
              Implemented authentication and authorization flows.
            </li>

            <li>
              Improved application performance through memoization,
              lazy loading and code optimization.
            </li>

            <li>
              Fixed production bugs and enhanced existing features.
            </li>

            <li>
              Participated in sprint planning,
              code reviews and Agile ceremonies.
            </li>

          </ul>

        </div>

        {/* Technology */}

        <div className="project-section">
          <h3>🛠 Technology Stack</h3>

          <div className="tech-stack">

            <div className="tech-item">
              <span>React.js</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"95%"}}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>Next.js</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>TypeScript</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>Redux Toolkit</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"92%"}}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>REST APIs</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"95%"}}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>Axios</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>Jest</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"85%"}}></div>
              </div>
            </div>

            <div className="tech-item">
              <span>React Testing Library</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"85%"}}></div>
              </div>
            </div>

          </div>

        </div>

        {/* Metrics */}

        <div className="project-section">
          <h3>📈 Application Modules</h3>

          <div className="metrics-grid">

            <div className="metric-card">
              <h4>Dashboard</h4>
              <p>Account Summary</p>
            </div>

            <div className="metric-card">
              <h4>Cards</h4>
              <p>Card Management</p>
            </div>

            <div className="metric-card">
              <h4>Rewards</h4>
              <p>Reward Points</p>
            </div>

            <div className="metric-card">
              <h4>History</h4>
              <p>Transactions</p>
            </div>

            <div className="metric-card">
              <h4>Statements</h4>
              <p>PDF Download</p>
            </div>

            <div className="metric-card">
              <h4>Profile</h4>
              <p>User Settings</p>
            </div>

          </div>

        </div>

        {/* Challenges */}

        <div className="project-section">
          <h3>🚀 Challenges & Solutions</h3>

          <ul className="highlights-list">

            <li>
              Reduced unnecessary re-rendering using React.memo,
              useMemo and useCallback.
            </li>

            <li>
              Optimized API calls using Redux Toolkit and caching.
            </li>

            <li>
              Built reusable UI components shared across banking modules.
            </li>

            <li>
              Improved page load time through lazy loading and code splitting.
            </li>

            <li>
              Implemented responsive UI for desktop, tablet and mobile.
            </li>

            <li>
              Fixed production issues and improved overall application stability.
            </li>

          </ul>

        </div>

        {/* Highlights */}

        <div className="project-section">
          <h3>🌟 Project Highlights</h3>

          <ul className="highlights-list">

            <li>Enterprise Banking Application</li>
            <li>Credit Card Management Portal</li>
            <li>Reward Points Dashboard</li>
            <li>Transaction Management</li>
            <li>Statement Download</li>
            <li>Redux Toolkit State Management</li>
            <li>REST API Integration</li>
            <li>Reusable Component Architecture</li>
            <li>Performance Optimization</li>
            <li>Responsive Design</li>
            <li>Agile Scrum Development</li>
            <li>Production Support & Bug Fixing</li>

          </ul>

        </div>

      </div>
    </div>
  );
}

export default React.memo(LastProject);