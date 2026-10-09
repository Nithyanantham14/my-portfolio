function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-background-circle"></div>

      <div className="hero-content">
        <div className="status-badge">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-small">HELLO, I'M</p>

        <h1>
          Nithyanantham
          <span> A</span>
        </h1>

        <h2>Junior Platform Engineer</h2>

        <p className="hero-description">
          I build cloud infrastructure, automate deployments
          and work with modern DevOps technologies to create
          reliable and scalable solutions.
        </p>

        <div className="hero-tech">
          <span>Azure</span>
          <span>DevOps</span>
          <span>Bicep</span>
          <span>Docker</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            Explore My Work <span>→</span>
          </a>

          <a
            href="/resume.pdf"
            className="btn secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span>↓</span>
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-photo-container">
          <div className="profile-photo-ring">
            <img
              src="/profile.jpg"
              alt="Nithyanantham A"
              className="profile-photo"
            />
          </div>

          <div className="profile-status">
            <span></span>
            Available
          </div>
        </div>

        <div className="floating-label label-one">Azure ☁</div>
        <div className="floating-label label-two">CI/CD ⚡</div>
        <div className="floating-label label-three">IaC ◇</div>
      </div>
    </section>
  );
}

export default Hero;
