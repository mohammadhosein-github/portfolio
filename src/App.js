import React from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App" data-spy="scroll" data-target="#myNavbar" data-offset="40">
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
