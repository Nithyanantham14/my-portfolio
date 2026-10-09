
import './app.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>MyPortfolio.</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <p className="intro">HELLO, I'M</p>
        <h1>Nithyanantham A</h1>
        <h2>React Developer in Progress 🚀</h2>
        <p>
          I build responsive web experiences and love learning
          modern technologies.
        </p>
        <a className="btn" href="#about">Explore My Portfolio</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm passionate about technology, software development,
          and creating useful digital experiences.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>
        <div className="skills">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Let's connect and build something great.</p>
        <a className="btn" href="mailto:your-email@example.com">
          Email Me
        </a>
      </section>

      <footer>
        © 2026 Nithyanantham A. All rights reserved.
      </footer>
    </div>
  )
}

export default App
