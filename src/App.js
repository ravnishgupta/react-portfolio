import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    {
      name: 'about me',
      description: 'About Me',
    },
    { name: 'portfolio', description: 'Portraits of people in my life' },
    { name: 'contact', description: 'Delicious delicacies' },
    { name: 'resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]); 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
    />
      <ContactForm />
      <Footer />
    </div>

  );
}

export default App;
