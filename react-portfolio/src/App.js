import React, {useState} from 'react';
import Header from './components/Header/';
import ProjectGallery from './components/ProjectGallery/';
import Resume from './components/Resume';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

import './App.css';

function App() {
  const navOptions = [
  {name: "About Me"}, 
  {name: "Past Projects"}, 
  {name: "Resume"}, 
  {name: "Contact Me"}
  ];

  const [currentTab, setCurrentTab] = useState(navOptions[0]);

  const renderTab = () => {
    switch (currentTab.name) {
      case 'About Me':
        return <About />;
      case 'Past Projects':
        return <ProjectGallery />;
      case 'Resume':
        return <Resume />;
      default: return <About />;
      case 'Contact Me':
        return <ContactForm />
      
    }
  }
  return (
    <div className="App">
      <Header 
      navOptions={navOptions}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      />
      <main>
        {renderTab(currentTab)}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
