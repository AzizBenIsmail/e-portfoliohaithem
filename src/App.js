import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Licenses from './components/Licenses';
import Skills from './components/Skills';
import Formation from './components/Formation';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <div className="App">
      <BackgroundMusic />
      <Header />
      <Hero />
      <About />
  <Licenses />
      <Skills />
      <Formation />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
