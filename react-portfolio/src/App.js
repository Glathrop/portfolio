import React, {useState} from 'react';
import Header from './components/Header/';
import ProjectGallery from './components/ProjectGallery/';
import Resume from './components/Resume';

import './App.css';

function App() {
  const navOptions = [
  {name: "About Me"}, 
  {name: "Past Projects"}, 
  {name: "Resume"}, 
  {name: "Contact Me"}
  ];

  const [currentTab, setCurrentTab] = useState(navOptions[0]);

  return (
    <div className="App">
      <Header 
      navOptions={navOptions}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      />
      <main>
        <ProjectGallery />
        <Resume />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
