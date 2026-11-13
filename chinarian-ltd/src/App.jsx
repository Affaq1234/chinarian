
import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="brand">CHINARIAN<span> LTD</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">INTELLIGENT AI. BETTER POSSIBILITIES.</p>

            <h1>
              Training AI Agents
              <span> for a Smarter Future.</span>
            </h1>

            <p className="hero-description">
              We help businesses develop, train and optimise AI agents
              designed to support people, improve workflows and create
              smarter ways of working.
            </p>

            <a href="#services" className="primary-button">
              Explore Our Services →
            </a>
          </div>
        </section>

        <section className="intro-section" id="about">
          <p className="eyebrow">WELCOME TO CHINARIAN LTD</p>
          <h2>Making AI work better for business.</h2>
          <p>
            We focus on helping organisations get more from artificial
            intelligence through thoughtful AI agent training, practical
            solutions and continuous improvement.
          </p>
        </section>

        <section className="services-section" id="services">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Our Services</h2>

          <div className="service-grid">
            <article className="service-card">
              <span>01</span>
              <h3>AI Agent Training</h3>
              <p>
                Developing and refining AI agents to support specific
                business tasks and requirements.
              </p>
            </article>

            <article className="service-card">
              <span>02</span>
              <h3>Conversation Design</h3>
              <p>
                Creating clear, helpful and natural interactions between
                people and AI agents.
              </p>
            </article>

            <article className="service-card">
              <span>03</span>
              <h3>AI Optimisation</h3>
              <p>
                Improving agent responses, consistency and performance
                through ongoing refinement.
              </p>
            </article>

            <article className="service-card">
              <span>04</span>
              <h3>Workflow Integration</h3>
              <p>
                Exploring practical ways AI agents can support business
                processes and everyday work.
              </p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Ready to explore what AI can do?</h2>
          <p>
            Get in touch to discuss your AI agent training and business
            requirements.
          </p>
          <a href="mailto:info@chinarian.com" className="primary-button">
            Contact Us →
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Chinarian LTD. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
