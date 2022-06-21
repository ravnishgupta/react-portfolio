import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    { name: 'about', description: 'About Me' },
    { name: 'portfolio', description: 'My Portfolio' },
    { name: 'resume', description: 'My Resume' },
    { name: 'contact', description: 'Contact' },
  ]); 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const renderPage = () => {
    switch (currentCategory.name) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />
      case 'resume':
        return <Resume />
      case 'contact':
        return <ContactForm />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {renderPage()}
        </main>
      <Footer />
    </div>
  );
}

export default App;
