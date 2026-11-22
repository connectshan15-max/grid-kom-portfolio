
import React, { useState } from "react";
import {
  ArrowUpRight, Menu, X, Instagram, Mail,
  Palette, Layers, Image, ChevronDown
} from "lucide-react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "Grid.kom offers poster design, logo design and brand identity design."
  },
  {
    q: "How can I request a poster?",
    a: "Use the Contact Us section to send your design request."
  },
  {
    q: "Can I request custom designs?",
    a: "Yes! You can contact us with your creative requirements."
  },
  {
    q: "How can I contact Grid.kom?",
    a: "Use the contact form or social media links on this website."
  }
];

const categories = ["All", "Logos", "Brand Identity", "Posters"];

function App() {
  const [active, setActive] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = ["Home", "Works", "About", "Contact Us", "Admin"];

  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#home">Grid<span>.kom</span></a>

        <button className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          {nav.map(item => (
            <a key={item}
              href={item === "Admin" ? "/admin" : `#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-label">
          <span className="status-dot"></span>
          INDEPENDENT CREATIVE DESIGN STUDIO
        </div>

        <h1>
          Ideas into <span>visual</span>
          <br /> experiences.
        </h1>

        <p>
          We create meaningful visual identities, striking posters
          and creative designs that make brands stand out.
        </p>

        <div className="hero-actions">
          <a href="#works" className="primary-btn">
            Explore Works <ArrowUpRight size={19} />
          </a>
          <a href="#contact" className="secondary-btn">
            Let's Talk
          </a>
        </div>

        <div className="hero-bottom">
          <span>CREATIVITY / DESIGN / IDENTITY</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="works section" id="works">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED CREATIONS</span>
            <h2>Our <span>Works.</span></h2>
          </div>
          <p>A collection of ideas transformed into visuals.</p>
        </div>

        <div className="filters">
          {categories.map(category => (
            <button
              key={category}
              className={active === category ? "filter active" : "filter"}
              onClick={() => setActive(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className="empty-gallery">
          <Layers size={42} />
          <h3>Your creative gallery starts here.</h3>
          <p>Your published posters, logos and projects will appear here.</p>
        </div>
      </section>

      <section className="about section" id="about">
        <span className="eyebrow">02 / THE CREATIVE SPACE</span>
        <h2>Design is more than what you <span>see.</span></h2>
        <p>
          Grid.kom is a creative design space focused on turning
          imagination into meaningful visual experiences.
          Every detail matters. Every idea has a story.
        </p>
        <div className="services">
          <div><Palette /><h3>Logo Design</h3></div>
          <div><Layers /><h3>Brand Identity</h3></div>
          <div><Image /><h3>Poster Design</h3></div>
        </div>
      </section>

      <section className="faq section">
        <span className="eyebrow">03 / QUICK ANSWERS</span>
        <h2>Frequently <span>Asked.</span></h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button onClick={() =>
                setOpenFaq(openFaq === index ? null : index)}>
                {faq.q}
                <ChevronDown className={openFaq === index ? "rotate" : ""}/>
              </button>
              {openFaq === index && <p>{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="eyebrow">04 / START A PROJECT</span>
        <h2>Have an idea? <span>Let's create.</span></h2>
        <p>Tell us about your project, feedback or creative vision.</p>
        <a className="primary-btn"
          href="mailto:connect.shan15@gmail.com">
          Get in Touch <ArrowUpRight size={19}/>
        </a>
      </section>

      <footer>
        <a className="logo" href="#home">Grid<span>.kom</span></a>
        <p>© 2026 Grid.kom. All rights reserved.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
