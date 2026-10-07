import { useState, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import profile from "./assets/about me.jpeg";
import carImg from "./assets/car-showroom-pro.png";
import miniImg from "./assets/mini-project.png";
import hotelImg from "./assets/hotel-booking-img.avif";
import emailjs from "@emailjs/browser";



import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";



import {
  FiExternalLink,
  FiGithub,
  FiShare2,
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiZap,
} from "react-icons/fi";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };


  const form = useRef();

  // 
  // SEND EMAIL
  // 

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      'service_d1vxsh4',
      'template_acev52f',
      form.current,
      'PA7SwXvfqdDp_nc6-'
    )

      .then(() => {

        alert("Message Sent Successfully ✅");

      })

      .catch(() => {

        alert("Failed To Send Message ❌");

      });

    e.target.reset();
  };





  return (
    <>
      {/* NAVBAR */}

      <nav className="top-navbar">
        <h2>
          <span>KAR</span><span>THICK</span>
        </h2>

        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>




      <div className="menu-btn" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* SIDEBAR */}

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </span>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </aside>


      <main>
        <section className="hero" id="home">
          <div className="hero-text fade">
            <h3>Hello 👋</h3>

            <h1>
              I’m <span>Karthick</span>
            </h1>

            <p className="role">Frontend Developer</p>

            <div className="hero-buttons">
              <button className="primary-btn">Hire Me</button>

              <a
                href="/frontend resume karthick kr.pdf"
                download
                className="resume-btn"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-img zoom">

            <span
              className="orbit-dot"
              style={{ top: "8%", left: "22%" }}
            ></span>

            <span
              className="orbit-dot"
              style={{ top: "22%", right: "8%" }}
            ></span>

            <span
              className="orbit-dot"
              style={{ bottom: "15%", left: "10%" }}
            ></span>

            <img src={profile} alt="profile" />
          </div>
        </section>


        {/* ABOUT */}

        <section className="about-section" id="about">
          <div className="about-container">

            <h2 className="about-title">
              About <span>Me</span>
            </h2>

            <p className="about-description">
              Passionate <strong>Frontend Developer</strong> dedicated to building
              modern, responsive, and user-centric web applications. I specialize in creating
              clean, scalable UI with smooth interactions and high performance using
              <span className="skill html">HTML</span>,
              <span className="skill css">CSS</span>,
              <span className="skill js">JavaScript</span>,
              <span className="skill react">React</span>, and
              <span className="skill bootstrap">Bootstrap</span>.
              I enjoy turning ideas into real-world products and continuously improving my skills
              by working on practical projects and learning the latest frontend technologies.
            </p>




            {/* EXPERIENCE STATS */}

            <div className="about-stats">
              <div className="stat-box">
                <h4>1</h4>
                <span>Years Learning</span>
              </div>

              <div className="stat-box">
                <h4>5+</h4>
                <span>Projects</span>
              </div>

              <div className="stat-box">
                <h4>100%</h4>
                <span>Responsive Design</span>
              </div>
            </div>

          </div>
        </section>


       {/* 
    FRONTEND SKILLS
    ULTRA PREMIUM ORBIT SYSTEM
 */}

<section className="premium-skills" id="skills">

  {/* 
      FUTURISTIC BACKGROUND SYSTEM
   */}

  <div className="skills-system-bg">

    {/* Perspective Grid */}
    <div className="system-grid"></div>

    {/* Moving Scan */}
    <div className="system-scanline"></div>

    {/* Dark Vignette */}
    <div className="system-vignette"></div>


    {/* Background Glows */}

    <div className="system-glow system-glow-1"></div>

    <div className="system-glow system-glow-2"></div>

    <div className="system-glow system-glow-3"></div>

    <div className="system-glow system-glow-4"></div>


    {/* ===================================================
        FLOATING PARTICLES
    =================================================== */}

    <div className="system-particles">

      {Array.from({ length: 30 }).map((_, index) => (
        <span key={index}></span>
      ))}

    </div>


    {/* ===================================================
        LASER / ENERGY SHOTS
    =================================================== */}

    <div className="energy-lines">

      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>

    </div>


    {/* ===================================================
        DIGITAL DATA STREAM
    =================================================== */}

    <div className="data-stream data-stream-one">
      0101 // HTML // CSS // JAVASCRIPT // REACT // UI
    </div>

    <div className="data-stream data-stream-two">
      &lt;FRONTEND_SYSTEM /&gt; 010101  ONLINE
    </div>

  </div>


  {/* 
      SECTION HEADER
   */}

  <div className="premium-skills-header">

    <div className="skills-system-badge">

      <span className="system-status-dot"></span>

      <span>
        FRONTEND TECHNOLOGY
      </span>

      <span className="badge-line"></span>

      <span>
        ONLINE
      </span>

    </div>


    <h2 className="premium-skills-title">

      My{" "}

      <span>
        Skills
      </span>

    </h2>


    <p className="premium-skills-description">

      Frontend technologies I use to create modern,
      responsive, interactive and high-quality digital
      experiences.

    </p>


    <div className="premium-title-divider">

      <span></span>

      <i></i>

      <span></span>

    </div>

  </div>


  {/* 
      DESKTOP ORBIT SYSTEM
   */}

  <div className="skills-orbit-system">


    {/* =====================================================
        MAIN ORBIT RINGS
    ===================================================== */}

    <div className="orbit-ring orbit-ring-outer"></div>

    <div className="orbit-ring orbit-ring-middle"></div>

    <div className="orbit-ring orbit-ring-inner"></div>

    <div className="orbit-dashed-ring"></div>


    {/* =====================================================
        ROTATING ENERGY POINTS
    ===================================================== */}

    <div className="orbit-energy orbit-energy-one"></div>

    <div className="orbit-energy orbit-energy-two"></div>

    <div className="orbit-energy orbit-energy-three"></div>

    <div className="orbit-energy orbit-energy-four"></div>


    {/* =====================================================
        CENTER CORE
    ===================================================== */}

    <div className="skills-core">

      <div className="core-outer-ring"></div>

      <div className="core-middle-ring"></div>

      <div className="core-pulse-ring"></div>


      <div className="core-inner">

        <span className="core-icon">
          &lt;/&gt;
        </span>

        <strong>
          FRONTEND
        </strong>

        <small>
          SYSTEM
        </small>

      </div>

    </div>


    {/* =====================================================
        HTML5
    ===================================================== */}

    <div
      className="orbit-skill"
      style={{
        "--orbit-radius": "330px",
        "--orbit-speed": "24s",
        "--orbit-delay": "0s"
      }}
    >

      <div className="orbit-card">

        <div className="orbit-card-icon html-icon">
          <FaHtml5 />
        </div>

        <div className="orbit-card-content">

          <strong>
            HTML5
          </strong>

          <small>
            Markup
          </small>

        </div>

      </div>

    </div>


    {/* =====================================================
        CSS3
    ===================================================== */}

    <div
      className="orbit-skill"
      style={{
        "--orbit-radius": "330px",
        "--orbit-speed": "24s",
        "--orbit-delay": "-3.43s"
      }}
    >

      <div className="orbit-card">

        <div className="orbit-card-icon css-icon">
          <FaCss3Alt />
        </div>

        <div className="orbit-card-content">

          <strong>
            CSS3
          </strong>

          <small>
            Styling
          </small>

        </div>

      </div>

    </div>


    {/* =====================================================
        JAVASCRIPT
    ===================================================== */}

    <div
      className="orbit-skill"
      style={{
        "--orbit-radius": "330px",
        "--orbit-speed": "24s",
        "--orbit-delay": "-6.86s"
      }}
    >

      <div className="orbit-card">

        <div className="orbit-card-icon javascript-icon">
          <FaJsSquare />
        </div>

        <div className="orbit-card-content">

          <strong>
            JavaScript
          </strong>

          <small>
            Logic
          </small>

        </div>

      </div>

    </div>


    {/* =====================================================
        REACT
    ===================================================== */}

    <div
      className="orbit-skill"
      style={{
        "--orbit-radius": "330px",
        "--orbit-speed": "24s",
        "--orbit-delay": "-10.29s"
      }}
    >

      <div className="orbit-card">

        <div className="orbit-card-icon react-icon">
          <FaReact />
        </div>

        <div className="orbit-card-content">

          <strong>
            React JS
          </strong>

          <small>
            Frontend
          </small>

        </div>

      </div>

    </div>


    {/* =====================================================
        BOOTSTRAP
    ===================================================== */}

    <div
      className="orbit-skill"
      style={{
        "--orbit-radius": "330px",
        "--orbit-speed": "24s",
        "--orbit-delay": "-13.72s"
      }}
    >

      <div className="orbit-card">

        <div className="orbit-card-icon bootstrap-icon">
          <FaBootstrap />
        </div>

        <div className="orbit-card-content">

          <strong>
            Bootstrap
          </strong>

          <small>
            Framework
          </small>

        </div>

      </div>

    </div>


    {/* =====================================================
        GIT
    ===================================================== */}

    <div
      className="orbit-skill"
      style={{
        "--orbit-radius": "330px",
        "--orbit-speed": "24s",
        "--orbit-delay": "-17.15s"
      }}
    >

      <div className="orbit-card">

        <div className="orbit-card-icon git-icon">
          <FaGitAlt />
        </div>

        <div className="orbit-card-content">

          <strong>
            Git
          </strong>

          <small>
            Version Control
          </small>

        </div>

      </div>

    </div>


    {/* =====================================================
        GITHUB
    ===================================================== */}

    <div
      className="orbit-skill"
      style={{
        "--orbit-radius": "330px",
        "--orbit-speed": "24s",
        "--orbit-delay": "-20.58s"
      }}
    >

      <div className="orbit-card">

        <div className="orbit-card-icon github-icon">
          <FaGithub />
        </div>

        <div className="orbit-card-content">

          <strong>
            GitHub
          </strong>

          <small>
            Repository
          </small>

        </div>

      </div>

    </div>

  </div>


  {/* 
      MOBILE CONTINUOUS SKILL SYSTEM
   */}

  <div className="mobile-skills-stream">

    <div className="mobile-skill-track">


      {/* FIRST SET */}

      <div className="mobile-skill-card">
        <FaHtml5 />
        <span>HTML5</span>
      </div>

      <div className="mobile-skill-card">
        <FaCss3Alt />
        <span>CSS3</span>
      </div>

      <div className="mobile-skill-card">
        <FaJsSquare />
        <span>JavaScript</span>
      </div>

      <div className="mobile-skill-card">
        <FaReact />
        <span>React JS</span>
      </div>

      <div className="mobile-skill-card">
        <FaBootstrap />
        <span>Bootstrap</span>
      </div>

      <div className="mobile-skill-card">
        <FaGitAlt />
        <span>Git</span>
      </div>

      <div className="mobile-skill-card">
        <FaGithub />
        <span>GitHub</span>
      </div>


      {/* DUPLICATE FOR SEAMLESS LOOP */}

      <div className="mobile-skill-card">
        <FaHtml5 />
        <span>HTML5</span>
      </div>

      <div className="mobile-skill-card">
        <FaCss3Alt />
        <span>CSS3</span>
      </div>

      <div className="mobile-skill-card">
        <FaJsSquare />
        <span>JavaScript</span>
      </div>

      <div className="mobile-skill-card">
        <FaReact />
        <span>React JS</span>
      </div>

      <div className="mobile-skill-card">
        <FaBootstrap />
        <span>Bootstrap</span>
      </div>

      <div className="mobile-skill-card">
        <FaGitAlt />
        <span>Git</span>
      </div>

      <div className="mobile-skill-card">
        <FaGithub />
        <span>GitHub</span>
      </div>

    </div>

  </div>


  {/* 
      SYSTEM STATS
   */}

  <div className="skills-system-stats">

    <div className="system-stat">

      <span className="stat-number">
        07
      </span>

      <span className="stat-label">
        Frontend Skills
      </span>

    </div>


    <div className="system-stat-line"></div>


    <div className="system-stat">

      <span className="stat-number">
        100%
      </span>

      <span className="stat-label">
        Responsive
      </span>

    </div>


    <div className="system-stat-line"></div>


    <div className="system-stat">

      <span className="stat-number">
        ∞
      </span>

      <span className="stat-label">
        Learning
      </span>

    </div>

  </div>


  {/* 
      BOTTOM FEATURES
   */}

  <div className="skills-feature-system">


    <div className="system-feature">

      <div className="feature-symbol">
        &lt;/&gt;
      </div>

      <div>

        <strong>
          Clean Code
        </strong>

        <span>
          Structured & Maintainable
        </span>

      </div>

    </div>


    <div className="system-feature">

      <div className="feature-symbol">
        ⚡
      </div>

      <div>

        <strong>
          Modern Frontend
        </strong>

        <span>
          Interactive User Experience
        </span>

      </div>

    </div>


    <div className="system-feature">

      <div className="feature-symbol">
        ◈
      </div>

      <div>

        <strong>
          Creative UI
        </strong>

        <span>
          Responsive & User Focused
        </span>

      </div>

    </div>


  </div>

</section>




        {/* 
    PROJECTS
    TRIPLE ULTRA PREMIUM PROJECT SHOWCASE
 */}

<section className="projects-section" id="projects">

  {/* 
      FUTURISTIC BACKGROUND
   */}

  <div className="projects-bg">

    <div className="projects-grid"></div>

    <div className="projects-scanline"></div>

    <div className="projects-glow projects-glow-one"></div>
    <div className="projects-glow projects-glow-two"></div>
    <div className="projects-glow projects-glow-three"></div>

    <div className="projects-energy energy-one"></div>
    <div className="projects-energy energy-two"></div>
    <div className="projects-energy energy-three"></div>

    <div className="projects-particles">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>


  {/* 
      SECTION HEADER
   */}

  <div className="projects-header">

    <div className="projects-status">

      <span className="projects-status-dot"></span>

      <span>PROJECT DATABASE</span>

      <span className="projects-status-line"></span>

      <span>ONLINE</span>

    </div>


    <div className="projects-mini-label">

      <FiLayers />

      <span>SELECTED WORKS</span>

    </div>


    <h2 className="projects-title">

      My{" "}

      <span>Projects</span>

    </h2>


    <p className="projects-description">

      A collection of modern frontend projects designed with
      responsive layouts, interactive interfaces and premium
      user experiences.

    </p>


    <div className="projects-title-line">

      <span></span>

      <i></i>

      <span></span>

    </div>

  </div>


  {/* 
      PROJECT SYSTEM
   */}

  <div className="projects-showcase">


    {/* =====================================================
        PROJECT 01
    ===================================================== */}

    <article className="premium-project-card project-card-one">

      {/* Card glow */}

      <div className="project-card-glow"></div>


      {/* Animated border */}

      <div className="project-border project-border-one"></div>


      {/* Project number */}

      <div className="project-number">

        <span>01</span>

        <small>PROJECT</small>

      </div>


      {/* Corner HUD */}

      <div className="project-hud project-hud-left">

        <span></span>
        <span></span>
        <span></span>

      </div>


      <div className="project-hud project-hud-right">

        <span></span>
        <span></span>

      </div>


      {/* Image */}

      <div className="project-image-wrapper">

        <img
          src={carImg}
          alt="Car Showroom frontend project"
          className="project-image"
        />


        <div className="project-image-overlay"></div>

        <div className="project-image-scan"></div>


        <div className="project-live-badge">

          <span></span>

          LIVE PROJECT

        </div>


        <div className="project-image-corner">

          <FiArrowUpRight />

        </div>

      </div>


      {/* Project content */}

      <div className="project-content">

        <div className="project-category">

          <FiCode />

          <span>FRONTEND EXPERIENCE</span>

        </div>


        <h3>
          CAR SHOWROOM
        </h3>


        <p>
          A modern automotive showroom interface with
          responsive layouts, attractive visuals and
          interactive frontend elements.
        </p>


        {/* Tech line */}

        <div className="project-tech-row">

          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>

        </div>


        {/* Actions */}

        <div className="project-actions">

          <a
            href="https://kalisamykarthick-45.github.io/my-new-website/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-view-btn"
          >

            <FiExternalLink />

            <span>View Project</span>

            <FiArrowUpRight className="btn-arrow" />

          </a>


          <a
            href="https://kalisamykarthick-45.github.io/my-new-website/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-github-btn"
          >

            <FiGithub />

            <span>GitHub</span>

          </a>


          <button
            type="button"
            className="project-share-btn"
            onClick={async () => {

              const projectUrl =
                "https://kalisamykarthick-45.github.io/my-new-website/";

              if (navigator.share) {

                await navigator.share({
                  title: "Car Showroom",
                  text: "Check out my Car Showroom frontend project.",
                  url: projectUrl,
                });

              } else if (navigator.clipboard) {

                await navigator.clipboard.writeText(projectUrl);

              }

            }}
          >

            <FiShare2 />

          </button>

        </div>

      </div>

    </article>



    {/* =====================================================
        PROJECT 02
    ===================================================== */}

    <article className="premium-project-card project-card-two">

      <div className="project-card-glow"></div>

      <div className="project-border project-border-two"></div>


      <div className="project-number">

        <span>02</span>

        <small>PROJECT</small>

      </div>


      <div className="project-hud project-hud-left">

        <span></span>
        <span></span>
        <span></span>

      </div>


      <div className="project-hud project-hud-right">

        <span></span>
        <span></span>

      </div>


      <div className="project-image-wrapper">

        <img
          src={miniImg}
          alt="Mini E-Commerce frontend project"
          className="project-image"
        />


        <div className="project-image-overlay"></div>

        <div className="project-image-scan"></div>


        <div className="project-live-badge">

          <span></span>

          LIVE PROJECT

        </div>


        <div className="project-image-corner">

          <FiArrowUpRight />

        </div>

      </div>


      <div className="project-content">

        <div className="project-category">

          <FiZap />

          <span>ECOMMERCE INTERFACE</span>

        </div>


        <h3>
          MINI E-COMMERCE
        </h3>


        <p>
          A clean and responsive e-commerce frontend with
          modern product presentation, interactive sections
          and smooth user-focused design.
        </p>


        <div className="project-tech-row">

          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>

        </div>


        <div className="project-actions">

          <a
            href=" https://kalisamykarthick-45.github.io/classic-brand-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-view-btn"
          >

            <FiExternalLink />

            <span>View Project</span>

            <FiArrowUpRight className="btn-arrow" />

          </a>


          <a
            href=" https://kalisamykarthick-45.github.io/classic-brand-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-github-btn"
          >

            <FiGithub />

            <span>GitHub</span>

          </a>


          <button
            type="button"
            className="project-share-btn"
            onClick={async () => {

              const projectUrl =
                " https://kalisamykarthick-45.github.io/classic-brand-frontend/";

              if (navigator.share) {

                await navigator.share({
                  title: "Mini E-Commerce",
                  text: "Check out my Mini E-Commerce frontend project.",
                  url: projectUrl,
                });

              } else if (navigator.clipboard) {

                await navigator.clipboard.writeText(projectUrl);

              }

            }}
          >

            <FiShare2 />

          </button>

        </div>

      </div>

    </article>



    {/* =====================================================
        PROJECT 03
    ===================================================== */}

    <article className="premium-project-card project-card-three">

      <div className="project-card-glow"></div>

      <div className="project-border project-border-three"></div>


      <div className="project-number">

        <span>03</span>

        <small>PROJECT</small>

      </div>


      <div className="project-hud project-hud-left">

        <span></span>
        <span></span>
        <span></span>

      </div>


      <div className="project-hud project-hud-right">

        <span></span>
        <span></span>

      </div>


      <div className="project-image-wrapper">

        <img
          src={hotelImg}
          alt="Royal Stay Rooms booking frontend project"
          className="project-image"
        />


        <div className="project-image-overlay"></div>

        <div className="project-image-scan"></div>


        <div className="project-live-badge">

          <span></span>

          PROJECT PREVIEW

        </div>


        <div className="project-image-corner">

          <FiArrowUpRight />

        </div>

      </div>


      <div className="project-content">

        <div className="project-category">

          <FiLayers />

          <span>TRAVEL EXPERIENCE</span>

        </div>


        <h3>
          ROYAL STAY ROOMS
        </h3>


        <p>
          A premium hotel room booking frontend concept
          focused on elegant presentation, responsive
          layouts and a smooth booking experience.
        </p>


        <div className="project-tech-row">

          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>

        </div>


        <div className="project-actions">

          <a
            href="https://kalisamykarthick-45.github.io/hotel_booking/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-view-btn"
          >

            <FiExternalLink />

            <span>View Project</span>

            <FiArrowUpRight className="btn-arrow" />

          </a>


          <a
            href="https://kalisamykarthick-45.github.io/hotel_booking/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-github-btn"
          >

            <FiGithub />

            <span>GitHub</span>

          </a>


          <button
            type="button"
            className="project-share-btn"
            onClick={async () => {

              const projectUrl =
                "https://kalisamykarthick-45.github.io/hotel_booking/";

              if (navigator.share) {

                await navigator.share({
                  title: "Royal Stay Rooms",
                  text: "Check out my Royal Stay Rooms frontend project.",
                  url: projectUrl,
                });

              } else if (navigator.clipboard) {

                await navigator.clipboard.writeText(projectUrl);

              }

            }}
          >

            <FiShare2 />

          </button>

        </div>

      </div>

    </article>

  </div>



  {/* 
      BOTTOM SYSTEM BAR
   */}

  <div className="projects-system-bar">

    <div className="projects-system-item">

      <span className="system-item-icon">
        <FiLayers />
      </span>

      <div>
        <strong>03</strong>
        <small>PROJECTS</small>
      </div>

    </div>


    <div className="projects-system-line"></div>


    <div className="projects-system-item">

      <span className="system-item-icon">
        <FiCode />
      </span>

      <div>
        <strong>100%</strong>
        <small>FRONTEND</small>
      </div>

    </div>


    <div className="projects-system-line"></div>


    <div className="projects-system-item">

      <span className="system-item-icon">
        <FiZap />
      </span>

      <div>
        <strong>∞</strong>
        <small>CREATIVITY</small>
      </div>

    </div>

  </div>


</section>




        {/* 
    EXPERIENCE
    TRIPLE ULTRA PREMIUM EXPERIENCE SYSTEM
 */}

<section className="experience-section" id="experience">

  {/* 
      FUTURISTIC BACKGROUND
   */}

  <div className="experience-bg">

    <div className="experience-grid"></div>

    <div className="experience-scanline"></div>

    <div className="experience-glow experience-glow-one"></div>
    <div className="experience-glow experience-glow-two"></div>
    <div className="experience-glow experience-glow-three"></div>

    <div className="experience-energy experience-energy-one"></div>
    <div className="experience-energy experience-energy-two"></div>

    <div className="experience-particles">

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

    </div>

  </div>


  {/* 
      HEADER
   */}

  <div className="exp-header">

    <div className="exp-status">

      <span className="exp-status-dot"></span>

      <span>CAREER SYSTEM</span>

      <span className="exp-status-line"></span>

      <span>ACTIVE</span>

    </div>


    <div className="exp-kicker">

      <span className="exp-kicker-line"></span>

      <span>PROFESSIONAL JOURNEY</span>

      <span className="exp-kicker-line"></span>

    </div>


    <h2>

      My <span>Experience</span>

    </h2>


    <p>

      Real-world internship experience building responsive and modern
      frontend interfaces with practical UI development skills.

    </p>


    <div className="exp-title-divider">

      <span></span>

      <i></i>

      <span></span>

    </div>

  </div>


  {/* 
      EXPERIENCE TIMELINE
   */}

  <div className="experience-container">


    {/* TIMELINE */}

    <div className="experience-timeline">

      <div className="timeline-line">

        <span className="timeline-progress"></span>

      </div>


      <div className="timeline-node">

        <span></span>

      </div>


      {/* ===================================================
          EXPERIENCE CARD
      =================================================== */}

      <article className="experience-card">


        {/* CARD CORNER HUD */}

        <div className="exp-corner exp-corner-top-left"></div>

        <div className="exp-corner exp-corner-top-right"></div>

        <div className="exp-corner exp-corner-bottom-left"></div>

        <div className="exp-corner exp-corner-bottom-right"></div>


        {/* MOVING BORDER */}

        <div className="exp-border"></div>


        {/* CARD GLOW */}

        <div className="exp-card-glow"></div>


        {/* =================================================
            TOP AREA
        ================================================= */}

        <div className="exp-top">


          {/* ICON */}

          <div className="exp-icon-wrapper">

            <div className="exp-icon-ring exp-icon-ring-one"></div>

            <div className="exp-icon-ring exp-icon-ring-two"></div>

            <div className="exp-icon">

              <i className="fa-solid fa-laptop-code"></i>

            </div>

          </div>


          {/* ROLE */}

          <div className="exp-heading">

            <div className="exp-role-label">

              <span className="exp-live-dot"></span>

              INTERNSHIP

            </div>


            <h3>
              Frontend Developer Intern
            </h3>


            <h4>
              Appin Technology
            </h4>

          </div>


          {/* STATUS */}

          <div className="exp-current">

            <span></span>

            <strong>
              ACTIVE
            </strong>

          </div>

        </div>


        {/* =================================================
            META INFORMATION
        ================================================= */}

        <div className="exp-meta">


          <div className="exp-meta-item">

            <div className="exp-meta-icon">

              <i className="fa-regular fa-calendar"></i>

            </div>

            <div>

              <small>
                DURATION
              </small>

              <strong>
                2025 - Present
              </strong>

            </div>

          </div>


          <div className="exp-meta-separator"></div>


          <div className="exp-meta-item">

            <div className="exp-meta-icon">

              <i className="fa-solid fa-code"></i>

            </div>

            <div>

              <small>
                ROLE
              </small>

              <strong>
                Frontend Development
              </strong>

            </div>

          </div>


          <div className="exp-meta-separator"></div>


          <div className="exp-meta-item">

            <div className="exp-meta-icon">

              <i className="fa-solid fa-display"></i>

            </div>

            <div>

              <small>
                FOCUS
              </small>

              <strong>
                Responsive UI
              </strong>

            </div>

          </div>

        </div>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <div className="exp-description">


          <div className="exp-description-line"></div>


          <p>

            Worked on responsive web applications and modern UI development
            using React, JavaScript, HTML, CSS, and Bootstrap.
            Built interactive frontend components, optimized layouts for
            mobile responsiveness, and improved user experience with
            clean design principles.

          </p>

        </div>


        {/* =================================================
            SKILLS
        ================================================= */}

        <div className="exp-skills-header">

          <span>TECHNOLOGY STACK</span>

          <div></div>

          <small>05 SKILLS</small>

        </div>


        <div className="exp-skills">


          <span>

            <i className="fa-brands fa-react"></i>

            React JS

          </span>


          <span>

            <i className="fa-brands fa-js"></i>

            JavaScript

          </span>


          <span>

            <i className="fa-brands fa-html5"></i>

            HTML5

          </span>


          <span>

            <i className="fa-brands fa-css3-alt"></i>

            CSS3

          </span>


          <span>

            <i className="fa-brands fa-bootstrap"></i>

            Bootstrap

          </span>


        </div>


        {/* =================================================
            BOTTOM STATUS
        ================================================= */}

        <div className="exp-bottom">


          <div className="exp-bottom-left">

            <span className="exp-pulse"></span>

            <span>
              FRONTEND SYSTEM ONLINE
            </span>

          </div>


          <div className="exp-bottom-code">

            <span>01</span>

            <i></i>

            <span>EXP</span>

          </div>

        </div>


      </article>

    </div>

  </div>


  {/* 
      EXPERIENCE FOOTER
   */}

  <div className="experience-footer">


    <div className="exp-footer-item">

      <span className="exp-footer-icon">

        <i className="fa-solid fa-laptop-code"></i>

      </span>

      <div>

        <strong>
          Frontend
        </strong>

        <small>
          DEVELOPMENT
        </small>

      </div>

    </div>


    <div className="exp-footer-line"></div>


    <div className="exp-footer-item">

      <span className="exp-footer-icon">

        <i className="fa-solid fa-mobile-screen-button"></i>

      </span>

      <div>

        <strong>
          Responsive
        </strong>

        <small>
          DESIGN
        </small>

      </div>

    </div>


    <div className="exp-footer-line"></div>


    <div className="exp-footer-item">

      <span className="exp-footer-icon">

        <i className="fa-solid fa-wand-magic-sparkles"></i>

      </span>

      <div>

        <strong>
          Modern UI
        </strong>

        <small>
          EXPERIENCE
        </small>

      </div>

    </div>


  </div>

</section>






       {/* 
    EDUCATION
    TRIPLE ULTRA PREMIUM EDUCATION SYSTEM
 */}



<section className="education-section" id="education">

  {/* 
      BACKGROUND SYSTEM
   */}

  <div className="education-bg">

    <div className="education-grid"></div>

    <div className="education-scanline"></div>

    <div className="education-glow education-glow-one"></div>
    <div className="education-glow education-glow-two"></div>
    <div className="education-glow education-glow-three"></div>

    <div className="education-energy education-energy-one"></div>
    <div className="education-energy education-energy-two"></div>

    <div className="education-particles">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>


  {/* 
      HEADER
   */}

  <div className="edu-header">

    <div className="edu-status">
      <span className="edu-status-dot"></span>
      <span>ACADEMIC SYSTEM</span>
      <span className="edu-status-line"></span>
      <span>VERIFIED</span>
    </div>

    <div className="edu-kicker">
      <span></span>
      <strong>EDUCATIONAL JOURNEY</strong>
      <span></span>
    </div>

    <h2>
      My <span>Education</span>
    </h2>

    <p>
      Academic journey focused on computer science, frontend development,
      and modern web technologies.
    </p>

    <div className="edu-title-divider">
      <span></span>
      <i></i>
      <span></span>
    </div>

  </div>


  {/* 
      EDUCATION CONTAINER
   */}

  <div className="education-container">

    <div className="education-timeline">

      {/* TIMELINE */}

      <div className="edu-timeline-line">
        <span className="edu-timeline-progress"></span>
      </div>

      <div className="edu-timeline-node">
        <span></span>
      </div>


      {/* ===================================================
          EDUCATION CARD
      =================================================== */}

      <article className="education-card">

        {/* HUD CORNERS */}

        <div className="edu-corner edu-corner-top-left"></div>
        <div className="edu-corner edu-corner-top-right"></div>
        <div className="edu-corner edu-corner-bottom-left"></div>
        <div className="edu-corner edu-corner-bottom-right"></div>

        <div className="edu-border"></div>
        <div className="edu-card-glow"></div>


        {/* =================================================
            TOP AREA
        ================================================= */}

        <div className="edu-top">

          <div className="edu-icon-wrapper">

            <div className="edu-icon-ring edu-icon-ring-one"></div>

            <div className="edu-icon-ring edu-icon-ring-two"></div>

            <div className="edu-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>

          </div>


          <div className="edu-heading">

            <div className="edu-label">
              <span className="edu-live-dot"></span>
              EDUCATION
            </div>

            <h3>
              Bachelor of Computer Science
            </h3>

            <h4>
              Adithya College of Arts and Science
            </h4>

          </div>


          <div className="edu-verified">

            <span className="edu-verified-dot"></span>

            <strong>COMPLETED</strong>

          </div>

        </div>


        {/* =================================================
            META INFORMATION
        ================================================= */}

        <div className="edu-meta">

          <div className="edu-meta-item">

            <div className="edu-meta-icon">
              <i className="fa-regular fa-calendar"></i>
            </div>

            <div>
              <small>DURATION</small>
              <strong>2022 - 2025</strong>
            </div>

          </div>


          <div className="edu-meta-separator"></div>


          <div className="edu-meta-item">

            <div className="edu-meta-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>

            <div>
              <small>DEGREE</small>
              <strong>B.Sc Computer Science</strong>
            </div>

          </div>


          <div className="edu-meta-separator"></div>


          <div className="edu-meta-item">

            <div className="edu-meta-icon">
              <i className="fa-solid fa-code"></i>
            </div>

            <div>
              <small>FOCUS</small>
              <strong>Web Development</strong>
            </div>

          </div>

        </div>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <div className="edu-description">

          <div className="edu-description-line"></div>

          <p>
            Studied programming fundamentals, web development,
            database management, and software technologies with
            practical project experience in frontend and full stack
            development.
          </p>

        </div>


        {/* =================================================
            TECHNOLOGY / KNOWLEDGE
        ================================================= */}

        <div className="edu-skills-header">

          <span>ACADEMIC KNOWLEDGE</span>

          <div></div>

          <small>05 AREAS</small>

        </div>


        <div className="edu-skills">

          <span>
            <i className="fa-solid fa-code"></i>
            Programming
          </span>

          <span>
            <i className="fa-solid fa-globe"></i>
            Web Development
          </span>

          <span>
            <i className="fa-solid fa-database"></i>
            Database
          </span>

          <span>
            <i className="fa-solid fa-laptop-code"></i>
            Software
          </span>

          <span>
            <i className="fa-solid fa-layer-group"></i>
            Projects
          </span>

        </div>


        {/* =================================================
            BOTTOM SYSTEM BAR
        ================================================= */}

        <div className="edu-bottom">

          <div className="edu-bottom-left">

            <span className="edu-pulse"></span>

            <span>
              ACADEMIC RECORD VERIFIED
            </span>

          </div>


          <div className="edu-bottom-code">

            <span>01</span>

            <i></i>

            <span>EDU</span>

          </div>

        </div>

      </article>

    </div>

  </div>


  {/* 
      FOOTER FEATURES
   */}

  <div className="education-footer">

    <div className="edu-footer-item">

      <span className="edu-footer-icon">
        <i className="fa-solid fa-graduation-cap"></i>
      </span>

      <div>
        <strong>Computer Science</strong>
        <small>DEGREE</small>
      </div>

    </div>


    <div className="edu-footer-line"></div>


    <div className="edu-footer-item">

      <span className="edu-footer-icon">
        <i className="fa-solid fa-code"></i>
      </span>

      <div>
        <strong>Web Development</strong>
        <small>FOCUS AREA</small>
      </div>

    </div>


    <div className="edu-footer-line"></div>


    <div className="edu-footer-item">

      <span className="edu-footer-icon">
        <i className="fa-solid fa-rocket"></i>
      </span>

      <div>
        <strong>Practical Projects</strong>
        <small>EXPERIENCE</small>
      </div>

    </div>

  </div>

</section>



        {/* CONTACT */}



        {/* CONTACT SECTION */}

        <section className="contact-section" id="contact">

          <div className="contact-container">

            {/* LEFT SIDE */}

            <div className="contact-left">

              <span className="contact-tag">
                LET'S CONNECT
              </span>

              <h2>
                Contact <span>Me</span>
              </h2>

              <p>
                Have a project idea, internship opportunity, or collaboration?
                Feel free to contact me.
              </p>

              <div className="contact-info">

                <div className="info-card">
                  <i className="fa-solid fa-envelope"></i>

                  <div>
                    <h4>Email</h4>
                    <span>kalisamykarthick@gmail.com</span>
                  </div>
                </div>

                <div className="info-card">
                  <i className="fa-solid fa-phone"></i>

                  <div>
                    <h4>Phone</h4>
                    <span>+91 9384374012</span>
                  </div>
                </div>

                <div className="info-card">
                  <i className="fa-solid fa-location-dot"></i>

                  <div>
                    <h4>Location</h4>
                    <span>Coimbatore, India</span>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="contact-form-box">

              {/* IMPORTANT */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form"
              >

                <div className="input-group">

                  {/* IMPORTANT name */}
                  <input
                    type="text"
                    name="user_name"
                    required
                  />

                  <label>Name</label>
                </div>

                <div className="input-group">

                  <input
                    type="email"
                    name="user_email"
                    required
                  />

                  <label>Email</label>
                </div>

                <div className="input-group">

                  <input
                    type="text"
                    name="subject"
                    required
                  />

                  <label>Subject</label>
                </div>

                <div className="input-group textarea-group">

                  <textarea
                    rows="6"
                    name="message"
                    required
                  ></textarea>

                  <label>Message</label>

                </div>

                <button
                  type="submit"
                  className="contact-btn"
                >
                  Send Message

                  <i className="fa-solid fa-paper-plane"></i>
                </button>

              </form>

            </div>

          </div>

        </section>


        {/* =========================================================
    FOOTER SECTION
    TRIPLE ULTRA PREMIUM FUTURISTIC FOOTER
========================================================= */}

<footer className="footer">

  {/* =======================================================
      FUTURISTIC BACKGROUND
  ======================================================== */}

  <div className="footer-background">

    <div className="footer-grid"></div>

    <div className="footer-scanline"></div>

    <div className="footer-glow footer-glow-one"></div>
    <div className="footer-glow footer-glow-two"></div>
    <div className="footer-glow footer-glow-three"></div>

    <div className="footer-energy footer-energy-one"></div>
    <div className="footer-energy footer-energy-two"></div>

    <div className="footer-orb footer-orb-one"></div>
    <div className="footer-orb footer-orb-two"></div>

    <div className="footer-particles">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>


  {/* =======================================================
      FOOTER MAIN
  ======================================================== */}

  <div className="footer-container">


    {/* =====================================================
        LEFT — BRAND
    ====================================================== */}

    <div className="footer-left">

      <div className="footer-system-label">

        <span className="footer-status-dot"></span>

        <span>PORTFOLIO SYSTEM</span>

        <span className="footer-status-line"></span>

        <span>ONLINE</span>

      </div>


      <h2 className="footer-logo">
        KAR<span>THICK</span>
      </h2>


      <div className="footer-logo-line">
        <span></span>
        <i></i>
        <span></span>
      </div>


      <p className="footer-description">
        Frontend Developer passionate about building
        modern, responsive, and user-friendly web experiences
        using React, JavaScript, and creative UI design.
      </p>


      <div className="footer-tech-line">

        <span>&lt;/&gt;</span>

        <div></div>

        <span>FRONTEND.DEV</span>

      </div>


      {/* MINI STATUS */}

      <div className="footer-mini-status">

        <div className="footer-mini-item">

          <span className="mini-dot"></span>

          <div>
            <small>STATUS</small>
            <strong>AVAILABLE</strong>
          </div>

        </div>


        <div className="footer-mini-item">

          <span className="mini-icon">
            <i className="fa-solid fa-code"></i>
          </span>

          <div>
            <small>FOCUS</small>
            <strong>WEB UI</strong>
          </div>

        </div>

      </div>

    </div>



    {/* =====================================================
        CENTER — QUICK LINKS
    ====================================================== */}

    <div className="footer-links">

      <div className="footer-section-heading">

        <span className="heading-icon">
          <i className="fa-solid fa-layer-group"></i>
        </span>

        <div>
          <small>NAVIGATION</small>
          <h3>Quick Links</h3>
        </div>

      </div>


      <div className="footer-link-card">

        <div className="footer-card-corner corner-one"></div>
        <div className="footer-card-corner corner-two"></div>
        <div className="footer-card-corner corner-three"></div>
        <div className="footer-card-corner corner-four"></div>


        <ul>

          <li>
            <a href="#home">

              <span className="link-number">01</span>

              <span className="link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>

              <span className="link-text">Home</span>

              <span className="link-arrow">↗</span>

            </a>
          </li>


          <li>
            <a href="#about">

              <span className="link-number">02</span>

              <span className="link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>

              <span className="link-text">About</span>

              <span className="link-arrow">↗</span>

            </a>
          </li>


          <li>
            <a href="#skills">

              <span className="link-number">03</span>

              <span className="link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>

              <span className="link-text">Skills</span>

              <span className="link-arrow">↗</span>

            </a>
          </li>


          <li>
            <a href="#projects">

              <span className="link-number">04</span>

              <span className="link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>

              <span className="link-text">Projects</span>

              <span className="link-arrow">↗</span>

            </a>
          </li>


          <li>
            <a href="#contact">

              <span className="link-number">05</span>

              <span className="link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>

              <span className="link-text">Contact</span>

              <span className="link-arrow">↗</span>

            </a>
          </li>

        </ul>

      </div>

    </div>



    {/* =====================================================
        RIGHT — SOCIAL
    ====================================================== */}

    <div className="footer-socials">

      <div className="footer-section-heading">

        <span className="heading-icon">
          <i className="fa-solid fa-link"></i>
        </span>

        <div>
          <small>SOCIAL NETWORK</small>
          <h3>Connect</h3>
        </div>

      </div>


      <div className="social-icons">


        {/* GITHUB */}

        <a
          href="https://github.com/kalisamykarthick-45"
          target="_blank"
          rel="noopener noreferrer"
          className="social-box github"
          aria-label="GitHub"
        >

          <span className="social-glow"></span>

          <i className="fa-brands fa-github"></i>

          <small>GITHUB</small>

        </a>



        {/* LINKEDIN */}

        <a
          href="www.linkedin.com/in/karthick-k-2123a6394"
          target="_blank"
          rel="noopener noreferrer"
          className="social-box linkedin"
          aria-label="LinkedIn"
        >

          <span className="social-glow"></span>

          <i className="fa-brands fa-linkedin-in"></i>

          <small>LINKEDIN</small>

        </a>



        {/* EMAIL */}

        <a
          href="mailto:kalisamykarthick@gmail.com"
          className="social-box email"
          aria-label="Email"
        >

          <span className="social-glow"></span>

          <i className="fa-solid fa-envelope"></i>

          <small>EMAIL</small>

        </a>



        {/* INSTAGRAM */}

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-box instagram"
          aria-label="Instagram"
        >

          <span className="social-glow"></span>

          <i className="fa-brands fa-instagram"></i>

          <small>INSTAGRAM</small>

        </a>

      </div>


      {/* CONNECT MESSAGE */}

      <div className="footer-connect-message">

        <span className="message-line"></span>

        <p>
          Let's build something
          <br />
          <strong>amazing together</strong> 🚀
        </p>

      </div>


      {/* SOCIAL STATUS */}

      <div className="social-status">

        <span className="social-live-dot"></span>

        <span>ALL CHANNELS ACTIVE</span>

      </div>

    </div>

  </div>



  {/* =======================================================
      FOOTER DIVIDER
  ======================================================== */}

  <div className="footer-divider">

    <span></span>

    <div className="footer-divider-center">
      <i></i>
      <i></i>
      <i></i>
    </div>

    <span></span>

  </div>



  {/* =======================================================
      FOOTER BOTTOM
  ======================================================== */}

  <div className="footer-bottom">

    <div className="footer-bottom-inner">

      <div className="footer-copyright">

        <span className="copyright-heart">
          <i className="fa-solid fa-heart"></i>
        </span>

        <p>
          © 2026 <strong>Karthick</strong>. All Rights Reserved.
        </p>

      </div>


      <div className="footer-bottom-center">

        <span>DESIGNED</span>

        <i></i>

        <span>DEVELOPED</span>

        <i></i>

        <span>WITH REACT</span>

      </div>


      <div className="footer-top-button">

        <a href="#home" aria-label="Back to top">

          <span>BACK TO TOP</span>

          <i className="fa-solid fa-arrow-up"></i>

        </a>

      </div>

    </div>

  </div>

</footer>



      </main>
    </>
  );
}

