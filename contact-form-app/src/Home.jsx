import React from "react";
// import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Awesome Website</h1>
          <p>
            Discover modern web development tutorials, projects, and resources
            that help you learn React, Django, and more.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are passionate developers sharing knowledge with the world. Our
          mission is to simplify coding concepts for students, beginners, and
          professionals by breaking them into easy lessons with real-world
          projects.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>React Tutorials</h3>
            <p>Step-by-step lessons on React from beginner to advanced.</p>
          </div>
          <div className="feature-card">
            <h3>Django REST API</h3>
            <p>Learn how to build REST APIs with Django & Django REST Framework.</p>
          </div>
          <div className="feature-card">
            <h3>Full Stack Projects</h3>
            <p>Combine frontend and backend into powerful applications.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "The tutorials are super clear and beginner-friendly. I built my
              first React app in just a week!"
            </p>
            <h4>- Ashu</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "Amazing teaching style! The teacher explains every concept like a
              friend, not just dumping code."
            </p>
            <h4>- Rohom</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 My Awesome Website | Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default Home;
