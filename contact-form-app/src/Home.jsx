import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to My Tech World</h1>
        <p>
          Explore tutorials, projects, and resources to become a better
          developer.
        </p>
        <button className="cta-btn">Get Started</button>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About This Website</h2>
        <p>
          This platform is designed for students and beginners who want to learn
          coding step by step. You will find tutorials on React, Django, Odoo,
          and more with practical projects and real-world examples.
        </p>
        <p>
          Our goal is to make learning fun, interactive, and simple. Whether
          you're just starting your coding journey or polishing your skills,
          we’ve got you covered.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What You Will Learn</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>React</h3>
            <p>Learn modern frontend development using React step by step.</p>
          </div>
          <div className="card">
            <h3>Django REST API</h3>
            <p>
              Build scalable and secure backend applications with Django REST
              Framework.
            </p>
          </div>
          <div className="card">
            <h3>Odoo</h3>
            <p>
              Customize business applications with Odoo and integrate third-party
              services.
            </p>
          </div>
          <div className="card">
            <h3>Projects</h3>
            <p>
              Practice real-world projects like Contact Book, Blog API, and
              E-commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h2>Latest Articles</h2>
        <article>
          <h3>🚀 Getting Started with React</h3>
          <p>
            React is a powerful JavaScript library for building dynamic user
            interfaces. In this article, we’ll cover how to set up your first
            React app using Vite and explore the project structure.
          </p>
        </article>
        <article>
          <h3>⚡ Introduction to Django REST Framework</h3>
          <p>
            DRF is one of the most popular frameworks for building RESTful APIs
            in Python. Learn how to build your first API and connect it with a
            frontend app.
          </p>
        </article>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 My Tech World | Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default Home;
