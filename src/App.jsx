import { useState, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import profile from "./assets/about me.jpeg";
import carImg from "./assets/car-showroom-pro.png";
import miniImg from "./assets/mini-project.png";
import hotelImg from "./assets/hotel-booking-img.avif";
import emailjs from "@emailjs/browser";

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


        {/* SKILLS */}

        <section className="section" id="skills">
          <h2 className="skills-title">Skills</h2>

          <div className="skills">
            <div className="card">HTML</div>
            <div className="card">CSS</div>
            <div className="card">JavaScript</div>
            <div className="card">React Js</div>
            <div className="card">Bootstrap</div>
            <div className="card">Git</div>
            <div className="card">GitHub</div>
            <div className="card">Responsive UI</div>
            <div className="card">Python</div>
            <div className="card">Sql</div>
            <div className="card">UI/UX design</div>


          </div>
        </section>




        <section className="section" id="projects">
          <h2 className="projects-title">Projects</h2>

          <div className="projects">

            {/* PROJECT 1 */}

            <div className="project-card">
              <img src={carImg} alt="car" />

              <div className="project-info">
                <h3>CAR SHOWROOM</h3>

                <div className="project-actions">
                  <a
                    href="https://kalisamykarthick-45.github.io/my-new-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👁 View
                  </a>

                  <a
                    href="https://kalisamykarthick-45.github.io/my-new-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐙 GitHub
                  </a>

                  <button
                    className="share"
                    onClick={() =>
                      navigator.share
                        ? navigator.share({
                          title: "React Portfolio",
                          url: "https://kalisamykarthick-45.github.io/my-new-website/",
                        })
                        : navigator.clipboard.writeText("https://kalisamykarthick-45.github.io/my-new-website/")
                    }
                  >
                    🔗 Share
                  </button>
                </div>
              </div>
            </div>

            {/* PROJECT 2 */}

            <div className="project-card">
              <img src={miniImg} alt="ecommerce" />

              <div className="project-info">
                <h3>MINI-E-Commerce</h3>

                <div className="project-actions">
                  <a
                    href="https://kalisamykarthick-45.github.io/Front_end_E-commerce/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👁 View
                  </a>
                  <a
                    href="https://kalisamykarthick-45.github.io/Front_end_E-commerce/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐙 GitHub
                  </a>

                  <button
                    className="share"
                    onClick={() =>
                      navigator.share
                        ? navigator.share({
                          title: "React Portfolio",
                          url: "https://kalisamykarthick-45.github.io/Front_end_E-commerce/",
                        })
                        : navigator.clipboard.writeText("https://kalisamykarthick-45.github.io/Front_end_E-commerce/")
                    }
                  >
                    🔗 Share
                  </button>
                </div>
              </div>
            </div>

            {/* PROJECT 3 */}

            <div className="project-card">
              <img src={hotelImg} alt="hotel" />

              <div className="project-info">
                <h3>ROYAL STAY ROOMS-BOOIKING WEBSITE</h3>

                <div className="project-actions">
                  <a
                    href="https://yourliveproject.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👁 View
                  </a>
                  <a
                    href="https://github.com/yourname/project1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐙 GitHub
                  </a>

                  <button
                    className="share"
                    onClick={() =>
                      navigator.share
                        ? navigator.share({
                          title: "React Portfolio",
                          url: "https://yourliveproject.com",
                        })
                        : navigator.clipboard.writeText("https://yourliveproject.com")
                    }
                  >
                    🔗 Share
                  </button>
                </div>
              </div>
            </div>


          </div>
        </section>




        {/* 
    EXPERIENCE SECTION
 */}

        <section className="experience-section" id="experience">

          <div className="exp-header">
            <h2>
              My <span>Experience</span>
            </h2>

            <p>
              Real-world internship experience building responsive and modern
              frontend interfaces with practical UI development skills.
            </p>
          </div>

          <div className="experience-container">

            {/* EXPERIENCE CARD */}

            <div className="experience-card">

              <div className="exp-top">
                <div className="exp-icon">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>

                <div>
                  <h3>Frontend Developer Intern</h3>
                  <h4>Appin Technology</h4>
                </div>
              </div>

              <div className="exp-duration">
                <i className="fa-regular fa-calendar"></i>
                <span>2025 - Present</span>
              </div>

              <p>
                Worked on responsive web applications and modern UI development
                using React, JavaScript, HTML, CSS, and Bootstrap.
                Built interactive frontend components, optimized layouts for
                mobile responsiveness, and improved user experience with
                clean design principles.
              </p>

              <div className="exp-skills">
                <span>React js</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>
              </div>

            </div>

          </div>
        </section>

        {/* 
    EDUCATION SECTION
 */}

        <section className="education-section" id="education">

          <div className="edu-header">
            <h2>
              My <span>Education</span>
            </h2>

            <p>
              Academic journey focused on computer science, frontend development,
              and modern web technologies.
            </p>
          </div>

          <div className="education-container">

            {/* EDUCATION CARD */}

            <div className="education-card">

              <div className="edu-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>

              <div className="edu-content">

                <h3>Bachelor of Computer Science</h3>

                <h4>Adithya college of Arts and science</h4>

                <div className="edu-year">
                  <i className="fa-regular fa-calendar"></i>
                  <span>2022 - 2025</span>
                </div>

                <p>
                  Studied programming fundamentals, web development,
                  database management, and software technologies with
                  practical project experience in frontend and full stack development.
                </p>

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


        {/* =========================================
   FOOTER SECTION
========================================= */}

        <footer className="footer">

          <div className="footer-container">

            {/* LEFT */}

            <div className="footer-left">

              <h2 className="footer-logo">
                KAR<span>THICK</span>
              </h2>

              <p>
                Frontend Developer passionate about building
                modern, responsive, and user-friendly web experiences
                using React, JavaScript, and creative UI design.
              </p>

            </div>

            {/* CENTER */}

            <div className="footer-links">

              <h3>Quick Links</h3>

              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#skills">Skills</a>
                </li>

                <li>
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>

            </div>

            {/* RIGHT */}

            <div className="footer-socials">

              <h3>Connect</h3>

              <div className="social-icons">

                <a
                  href="https://github.com/kalisamykarthick-45"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  href="mailto:kalisamykarthick@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>

              </div>

            </div>

          </div>

          {/* BOTTOM */}

          <div className="footer-bottom">
            <p>
              © 2026 Karthick. All Rights Reserved.
            </p>
          </div>

        </footer>

      </main>
    </>
  );
}

