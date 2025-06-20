// src/pages/Home/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Crafted with passion. Powered by full-stack engineering.</p>
        <a href="/Projects" className="cta-btn">View My Work</a>
      </section>
    </div>
  );
}

export default Home;
